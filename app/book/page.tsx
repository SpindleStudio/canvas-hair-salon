import type { Metadata } from "next";

import { BookFork } from "@/components/sections/book-fork";
import { BookLogistics } from "@/components/sections/book-logistics";

export const metadata: Metadata = {
  title: "Book | Canvas Hair Salon",
  description: "New clients start with a free intake form. Returning clients book directly via GlossGenius.",
};

export default function BookPage() {
  return (
    <>
      <BookLogistics />
      <BookFork />
    </>
  );
}
