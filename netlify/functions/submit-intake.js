// Receives Carly's new client intake submissions and creates a record in the Canvas Notion CRM.
// Kaitlin's submissions are skipped — she manages bookings through GlossGenius.

const DATABASE_ID   = '375adf25-0a4e-80f2-bc58-c28571c21e5d';
const CARLY_USER_ID = '376d872b-594c-81b0-86e8-0002e69d1a9b';

// Map intake form service labels to Notion CRM multi-select option names
const SERVICE_MAP = {
  'Grey coverage & root retouch': 'grey coverage & root retouch',
  'Grey blending & transition':   'grey blending & transitioning',
  'Highlights & brightening':     'highilights & brightening',
  'Lowlights & dimension':        'lowlights & dimension',
  'Gloss & refresh':              'gloss & refresh',
  'Vivid & fashion color':        'vivid & Fashion Color',
  'Cut & styling':                'cut & styling',
};

async function uploadToImgbb(base64) {
  const params = new URLSearchParams();
  params.append('key',   process.env.IMGBB_API_KEY);
  params.append('image', base64);

  const res  = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body: params });
  const json = await res.json();
  return json?.data?.url || null;
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  // Only Carly's submissions go to the CRM
  if (data.stylist !== 'carly') {
    return { statusCode: 200, body: JSON.stringify({ skipped: true }) };
  }

  // Map intake form source label to CRM select option name
  const SOURCE_MAP = {
    'A friend or client referred me': 'Referral',
    'Instagram':                      'Instagram',
    'Google search':                  'Google',
    'Facebook':                       'Facebook',
    'Other':                          'Other',
  };
  const source = SOURCE_MAP[data.source] || null;

  // Map selected services to CRM option names
  const services = (data.services || [])
    .filter(s => SERVICE_MAP[s])
    .map(s => ({ name: SERVICE_MAP[s] }));

  // Build a readable notes summary from all intake fields
  const noteParts = [];
  if (data.source) {
    const src = data.referral ? `${data.source} (${data.referral})` : data.source;
    noteParts.push(`How they found Canvas: ${src}`);
  }
  if (data.colorHistory?.length) {
    noteParts.push(`Color history: ${data.colorHistory.join(', ')}`);
  }
  if (data.thickness || data.length) {
    noteParts.push(`Hair: ${[data.thickness, data.length].filter(Boolean).join(', ')}`);
  }
  if (data.services?.includes('Not sure yet')) {
    noteParts.push('Services: Not sure yet — wants to discuss');
  }
  if (data.goals) {
    noteParts.push(`Goals: ${data.goals}`);
  }
  if (data.allergies) {
    noteParts.push(`Sensitivities/allergies: ${data.allergies}`);
  }
  const notes = noteParts.join('\n\n');

  // Upload photos to imgbb (fail gracefully — don't block the submission)
  let currentPhotoUrl = null;
  let inspoPhotoUrl   = null;
  if (data.currentPhoto) {
    try { currentPhotoUrl = await uploadToImgbb(data.currentPhoto); } catch(e) { console.error('Current photo upload failed:', e); }
  }
  if (data.inspoPhoto) {
    try { inspoPhotoUrl = await uploadToImgbb(data.inspoPhoto); } catch(e) { console.error('Inspo photo upload failed:', e); }
  }

  // Build photo blocks for Notion page content
  const children = [];
  if (currentPhotoUrl) {
    children.push({ object: 'block', type: 'heading_3', heading_3: { rich_text: [{ type: 'text', text: { content: 'Current hair' } }] } });
    children.push({ object: 'block', type: 'image', image: { type: 'external', external: { url: currentPhotoUrl } } });
  }
  if (inspoPhotoUrl) {
    children.push({ object: 'block', type: 'heading_3', heading_3: { rich_text: [{ type: 'text', text: { content: 'Inspiration' } }] } });
    children.push({ object: 'block', type: 'image', image: { type: 'external', external: { url: inspoPhotoUrl } } });
  }

  const payload = {
    parent: { database_id: DATABASE_ID },
    properties: {
      'Name':       { title:        [{ text: { content: data.name || '' } }] },
      'Phone':      { phone_number: data.phone || null },
      'Services':   { multi_select: services },
      'New Client': { checkbox:     true },
      ...(source && { 'Source': { select: { name: source } } }),
      'Notes': {
        rich_text: [
          {
            type:    'mention',
            mention: { type: 'user', user: { id: CARLY_USER_ID } },
          },
          {
            type: 'text',
            text: { content: ' — new client inquiry\n\n' + notes },
          },
        ],
      },
    },
    ...(children.length > 0 && { children }),
  };

  try {
    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization':  `Bearer ${process.env.NOTION_TOKEN}`,
        'Content-Type':   'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Notion API error:', res.status, err);
      return { statusCode: 500, body: `Notion error ${res.status}` };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: 'Internal error' };
  }
};
