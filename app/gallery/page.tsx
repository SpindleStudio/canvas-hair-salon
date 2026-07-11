import type { Metadata } from "next";

import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery | Spindle Studio",
  description: "[PLACEHOLDER] gallery page description",
};

export default function GalleryPage() {
  return <GalleryGrid />;
}
