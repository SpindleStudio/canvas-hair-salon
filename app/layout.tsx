import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import { PageShell } from "@/components/layout/page-shell";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

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
    <html lang="en" className={archivo.variable}>
      <head>
        {/* Neue Haas Grotesk, Jami's Adobe Fonts entitlement (CLAUDE.md Section 3) */}
        <link rel="stylesheet" href="https://use.typekit.net/mfk5izq.css" />
      </head>
      <body className="antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
