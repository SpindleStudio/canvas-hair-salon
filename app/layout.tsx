import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";

import "./globals.css";

export const metadata: Metadata = {
  title: "Spindle Studio",
  description: "[PLACEHOLDER] site description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
