import Link from "next/link";

import { siteConfig } from "@/lib/config";

const baseNavItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book", href: "/book" },
];

// hasBlog gates this nav item entirely - when false, "Journal" never
// renders and no blog route exists anywhere in the codebase (SITE-SCHEMA.md).
const navItems = siteConfig.hasBlog
  ? [...baseNavItems, { label: "Journal", href: "/journal" }]
  : baseNavItems;

export function Header() {
  return (
    <header className="border-b border-surface bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-h3 font-display text-ink">
          Spindle Studio
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
