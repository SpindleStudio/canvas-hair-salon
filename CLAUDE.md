# Spindle Studio — Claude Code Build Conventions

This file orients Claude Code on every Spindle Studio site build. It is the shared
foundation that gets copied into each new client repo (starting with Spindle Studio's
own site as the reference build). Read this in full before writing or changing any code.

## 0. Current infra status (updated July 2026)

- **GitHub:** Organization created at `github.com/SpindleStudio`. Reference template repo
  lives at `github.com/SpindleStudio/site-template` — private, empty until Claude Code's
  first scaffold push. Every client repo forks from this one.
- **Netlify:** Confirmed the only deployment platform. Netlify MCP connector is live and
  tested from Chat (fresh Netlify account, not Nick's — connect Nick separately later if
  he needs direct access). Vercel is struck from the project entirely; ignore any stray
  Vercel references.
- **spindlestudio.io domain:** Live and pointed at Netlify (project `lighthearted-hotteok-b2c498`,
  site ID `004d73fe-10e1-4e10-8699-4bf8cf50224f`). Netlify is the authoritative DNS provider
  (nameservers moved off Hostinger). A branded placeholder page is currently deployed there —
  drag-and-drop, not connected to a repo yet. Once `site-template` builds out, connect this
  Netlify site to the real GitHub repo for git-based deploys instead of manual drag-and-drop.
- **Google Workspace / email for the domain:** Still stuck — unrelated to hosting, separate
  open item, not blocking any build work.

## 1. Where this fits (DPD framework)

Spindle Studio operates on a Document → Plan → Deploy workflow. Brand decisions,
creative direction, copy tone, and page architecture are locked upstream, in Chat/Projects,
before a build ever starts. Claude Code's job is the **Deploy** layer only:

- Build from an approved brief. Don't redesign, rebrand, or reinterpret creative
  decisions that were already made.
- If a brief is missing a needed decision (a color, a piece of copy, a layout call),
  **flag it and ask** — don't invent one and move on.
- Nick reviews code. Zach handles QA. Jami is final approval authority on anything
  client-facing. Claude Code proposes; it doesn't unilaterally ship to production.
- No production deploy without Jami's explicit go-ahead. Staging/preview deploys are fair
  game any time — that's how review happens.

## 2. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router), TypeScript | The default choice for marketing/agency sites right now — huge ecosystem, handles static + dynamic pages well, and it's the framework Claude Code has the deepest, most reliable training on, which means fewer generated bugs. |
| Styling | Tailwind CSS | Utility classes map directly onto design tokens, so re-skinning a component for a new client brand is a token swap, not a rewrite. |
| Component primitives | shadcn/ui | Copy-in components (not an npm dependency), so every client repo can own and modify its components directly instead of fighting a locked-down library. |
| Deployment | Netlify | Confirmed platform. Next.js deploys to Netlify cleanly via their official Next.js runtime. Netlify MCP is connected and live (see Section 0) — Claude Code or Chat can create sites, manage env vars, and deploy directly once a repo exists. |
| Package manager | npm | Simplest default; no strong reason to deviate yet. |

## 3. Design tokens — the reskinning system

Every client site pulls from the **same token names**, with different values per brand.
This is what makes "many websites" fast: components are written once against tokens,
never against hardcoded hex values or pixel sizes.

Token file lives at `styles/tokens.css` as CSS variables, mapped into `tailwind.config.ts`.

**Color tokens (names, not values — values are set per client):**
```
--color-ink       /* primary text / dark anchor */
--color-paper     /* primary background */
--color-surface   /* secondary background, cards */
--color-muted     /* tertiary text, captions, meta */
--color-accent    /* brand signal color — CTAs, highlights */
```

**Type scale (names carried over from the existing Figma type system):**
```
--font-h1     /* hero / page titles */
--font-h2     /* section headers */
--font-h3     /* subsection headers, card titles */
--font-body-l /* lead paragraphs, intros */
--font-body   /* standard body copy */
--font-caption /* meta, labels, eyebrow text */
```

**Spacing scale:** 4px base unit, Tailwind defaults extended only if a client's grid
genuinely requires it. Don't introduce one-off spacing values in component code.

**Font delivery note:** For Spindle Studio's own brand (not client brands), Neue Haas
Grotesk is available directly via Jami's Adobe Fonts entitlement — kit `mfk5izq`,
embed `<link rel="stylesheet" href="https://use.typekit.net/mfk5izq.css">`. Confirmed
available postscript names: `NHaasGroteskDSPro-65Md`, `NHaasGroteskDSPro-75Bd`,
`NHaasGroteskTXPro-55Rg`, `NHaasGroteskTXPro-75Bd`, `NHaasGroteskTXPro-56It`,
`NHaasGroteskDSPro-55Rg`. This replaces Inter Tight as a stand-in for anything built
in Spindle's own environment. **This is Spindle's own brand delivery method, not
necessarily a client's** — client font entitlements are a per-brief decision like any
other token value.

**Open item, unchanged:** Spindle Studio's own full token *values* (color palette beyond
font family, for the dogfood build) aren't locked yet — the Ink/Paper/Stone/Graphite/Signal
palette in the Jami Reighard portfolio Figma file is a personal-portfolio system, not
confirmed as Spindle Studio's agency identity. Don't assume they're the same until
confirmed in Chat/Projects. The exact intended weight for "headline: Register weight"
(referenced elsewhere) also still needs confirming against original source — Display
Medium/Bold have been used as the closest match so far, not yet verified as correct.

## 4. Repo structure

```
/app                  route segments, page.tsx per route
/components
  /primitives         shadcn-derived base components (Button, Input, Card...)
  /sections           composed page sections (Hero, CaseStudyGrid, ContactForm...)
  /layout             Header, Footer, PageShell
/lib                  utilities, data fetching, constants
/content              markdown/MDX content where a CMS isn't warranted
/styles
  tokens.css          design tokens for this client
/public               static assets, images, fonts
```

Naming: kebab-case for files and folders, PascalCase for component names,
camelCase for functions and variables.

## 5. Copy and content rules (locked, apply to all Spindle Studio output)

- No em dashes, anywhere, in any file — use spaced hyphens instead.
- Follow the specific client brief's voice and tone; don't default to generic
  "agency voice" filler copy when a brief calls for something specific.
- Placeholder copy (before real client content is ready) should be marked clearly
  as `[PLACEHOLDER]`, never left looking like finished copy.

## 6. Pre-review checklist

Before marking any build "ready for Nick/Zach review," verify:

- [ ] Responsive at mobile, tablet, and desktop breakpoints
- [ ] Semantic HTML (proper heading hierarchy, landmark elements)
- [ ] All images have meaningful alt text
- [ ] Color contrast meets WCAG AA against the client's actual token values
- [ ] No broken internal links or unfilled placeholder hrefs
- [ ] Forms validate and show real error states, not just happy-path
- [ ] No console errors on build or in the browser

## 7. New client build — starting checklist

1. Pull the locked creative brief and token values from the Chat/Projects wrap doc.
2. Fork this template repo (`github.com/SpindleStudio/site-template`).
3. Drop in the client's token values in `styles/tokens.css`.
4. Swap logo, imagery, and copy per the brief.
5. Build pages per the approved architecture — don't add or cut sections without a
   brief update.
6. Nick review pass.
7. Deploy to Netlify staging, Zach QA pass against the checklist above.
8. Jami final approval.
9. Production deploy + domain connection.

## 8. What not to do without asking

- Don't make brand or creative calls (color, imagery, tone, layout) that weren't in
  the brief — flag the gap instead.
- Don't push to production without explicit sign-off.
- Don't introduce a new dependency or swap a stack piece (framework, styling approach,
  hosting) without flagging it here first — this file is the source of truth for every
  repo, so a silent change in one client build creates drift everywhere else.
