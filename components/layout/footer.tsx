import Link from "next/link";

import { siteConfig } from "@/lib/config";

const baseNavItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book", href: "/book" },
];

const navItems = siteConfig.hasBlog
  ? [...baseNavItems, { label: "Journal", href: "/journal" }]
  : baseNavItems;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-caption text-muted sm:flex-row sm:justify-between">
        <p>&copy; {year} Spindle Studio. All rights reserved.</p>
        <nav aria-label="Footer" className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
