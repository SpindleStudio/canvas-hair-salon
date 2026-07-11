# Spindle Studio - site-template

Reference build and fork base for every Spindle Studio client site. Read
`CLAUDE.md` in full before changing anything here - it is the shared build
conventions doc for this and every client repo forked from it.

## Stack

Next.js (App Router, TypeScript), Tailwind CSS, shadcn-derived primitives.
Deploys to Netlify. See `CLAUDE.md` Section 2 for the full rationale.

## Getting started

```bash
npm install
npm run dev
```

Requires Node >=18.17 (Next.js 14). Open [http://localhost:3000](http://localhost:3000).

## Structure

See `CLAUDE.md` Section 4 for the full repo layout and naming conventions.

## New client build

Forking this repo for a new client starts at `CLAUDE.md` Section 7.
