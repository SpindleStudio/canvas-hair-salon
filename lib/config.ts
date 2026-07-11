// Per-client site configuration. Blog is a paid add-on (SITE-SCHEMA.md
// "Blog - optional add-on"), not part of the base template. hasBlog stays
// false until a client buys it; when false, no nav item, no routes, no
// trace of blog anywhere in this codebase. Flipping this on later means
// adding app/journal routes and a nav item, not forking the template.
export const siteConfig = {
  hasBlog: false,
};
