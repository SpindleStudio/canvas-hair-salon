import type { Metadata } from "next";

import { BookFork } from "@/components/sections/book-fork";
import { BookLogistics } from "@/components/sections/book-logistics";

export const metadata: Metadata = {
  title: "Book | Spindle Studio",
  description: "[PLACEHOLDER] book page description",
};

export default function BookPage() {
  return (
    <>
      <BookLogistics />
      <BookFork />
    </>
  );
}
