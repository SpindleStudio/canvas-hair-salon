# Spindle Studio — Site Content Schema

The one structure every client site builds from. Style changes per client (see the
CLAUDE.md token system). This does not. If a client's needs genuinely don't fit this
shape, that's a conversation before a build starts, not a reason to improvise mid-build.

Built lean on purpose: every section here earns its maintenance cost. If it's not
something a small business owner can keep current without thinking about it, it
doesn't belong in the base template.

## The CTA set

Three approved channels, site-wide. A client uses whichever subset genuinely applies
to their business, but never invents a fourth, and never restates one of these three
in different words in different places.

1. **Book online** — direct link to the booking flow on the Book page.
2. **Text for an appointment** — click-to-text. Often the highest-converting, lowest-
   friction option for personal-service businesses. Copy should sell the channel itself
   ("Text us — most appointments confirmed same day"), not just say "text us."
3. **Call** — direct phone link, where a client wants voice contact as an option.

Each one keeps the same label, same icon, same destination everywhere it appears.
Three real channels is not the same problem as three redundant buttons — the old
Canvas site's issue was restating one action three ways, not offering three actions.

## Pages (base template)

1. **Home** — carries almost all of the content. Most visitors never leave it.
2. **Gallery** — visual work samples. Images, minimal text.
3. **Book** — logistics, contact, and the new/returning booking fork, all in one place.

Three pages. A page only gets added if it holds information that genuinely can't live
in Home, Gallery, or Book.

## Home page — sections in order

**1. Hero**
- Brand statement (one line, specific to the client, not generic)
- One to three CTAs from the approved set above — whichever channels this client
  actually uses. Never a variant outside that set.

**2. Value proposition module**
- 2-3 differentiators. Never 4+. More than 3 real ones means they're features, not
  differentiators — cut to the 3 that matter.

**3. Team module**
- One card per person: photo, name, specialty, and a testimonial.
- Testimonials are required, not optional, in this module. Every team member has one
  before the section ships — no partial coverage. If one person's testimonial isn't
  ready yet, the whole module waits, or that person is a placeholder card with no
  testimonial claim implied for anyone.
- Per-person CTA channel can differ if the business genuinely works that way (e.g.
  one stylist requires a consult first) — state it as a line under their name, not
  as a silently different set of buttons.
- A short trust line (1-2 sentences — founder story, brand ethos, whatever's true)
  sits under the team grid. Not its own section.

**4. Location and closing CTA**
- Address, hours, parking or access notes — inline, not a link-out.
- Same CTA set from the hero, same labels, same destinations.

Four sections. That's the ceiling for Home.

## Gallery page
- Grid of work images. Captions optional, short if present.
- No CTAs repeated from Home — this page's only job is showing the work.

## Book page
- Logistics first: address, hours, phone/email, map.
- Then the fork: new client (structured intake questions specific to the service)
  or returning client (direct booking, text, or call — whichever channels apply).

## Rules that keep this lean

- CTAs come only from the approved three-channel set. A fourth variant, or a
  restatement of one of the three in different words, is a build error.
- No per-person infrastructure beyond what's specified above. Team members share
  the same card shape; a real difference between people is a line of copy, not a
  different component.
- No placeholder content ships. An empty section or an unfulfilled required field
  (like a missing testimonial) means the module waits, not a "coming soon" note.
- Four sections max on Home, three pages max in the base template.

---

## Blog — optional add-on (upsell)

A separate module, not a bigger version of the base template. The base three pages
must work identically whether this is attached or not.

**When attached:**
- Adds one nav item ("Journal" or similar) and two page types: a post index and a
  single-post template.
- Post template: title, date, cover image, body. No categories, no tags, no comments,
  no related-posts module — those are later upsells, not part of this one.
- Nothing on Home, Gallery, or Book changes to accommodate it.

**When not attached:**
- No nav item, no routes, nothing in the codebase a client is paying to not use.

**Implementation note for Claude Code:** a single config flag per client
(`hasBlog: true/false` alongside that client's token file) conditionally mounts the
nav item and routes. One codebase, one flag — never a forked copy of the template.

**Content workflow:** one topic per cycle produces two outputs in the same pass —
a longer SEO-structured post for the blog, and short platform-native captions for
social, both built around the same keyword and local reference. AI drafts both;
a human spot-checks for one thing only — a real, specific, true detail about that
client (an actual technique, a real neighborhood, something no generic template
could have written). That single check is what keeps this out of "scaled content
abuse" territory and inside content Google actually rewards. Writing happens in
Chat/Cowork, not Claude Code. Posting to social stays manual until the Build
Library's posting-volume trigger is actually met — this workflow doesn't reopen
that decision on its own.

**Why it sells — the pitch for Nick:**
A three-page static site can only ever rank for a handful of search terms — mostly
just the business's name and category. Every blog post is a new indexable page
targeting a specific search a real customer types in ("best haircut for fine hair,"
"how often should you get a color touch-up") — searches the homepage will never
capture no matter how well it's written. Each post is also another chance to
naturally repeat the business's name and city, which is most of what local search
ranking runs on. Google also weighs how recently a site was updated; a static
three-pager goes stale the day it launches, while a blog gives the site a reason to
be re-crawled and re-ranked on an ongoing basis. And every post becomes reusable
material elsewhere — an Instagram caption, an email, a text blast — so the content
cost is paid once and spent multiple times. The honest tradeoff: none of this works
without someone actually writing posts, which is exactly why it's priced as an
add-on and not bundled into the base site.
