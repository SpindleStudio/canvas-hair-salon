import type { Metadata } from "next";
import { Noto_Serif_Display, Public_Sans } from "next/font/google";

import { PageShell } from "@/components/layout/page-shell";

import "./globals.css";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canvas Hair Salon - Wilmington, NC",
  description: "A boutique suite salon in Wilmington's Cargo District. Natural colour specialists Carly Carden and Kaitlin Jackson, one client at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerifDisplay.variable} ${publicSans.variable}`}>
      <body className="antialiased bg-paper text-ink">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
