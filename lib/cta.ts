// The three approved CTA channels, site-wide (SITE-SCHEMA.md "The CTA set").
// Each channel keeps the same label and destination everywhere it appears.
// A client uses whichever subset genuinely applies to their business, never
// a fourth variant and never a restatement of one of these three.
export type CtaChannel = "bookOnline" | "text" | "call";

export interface CtaDefinition {
  channel: CtaChannel;
  label: string;
  href: string;
}

export const ctaDefinitions: Record<CtaChannel, CtaDefinition> = {
  bookOnline: {
    channel: "bookOnline",
    label: "Book online",
    href: "/book",
  },
  text: {
    channel: "text",
    label: "Text us",
    href: "sms:9105300036",
  },
  call: {
    channel: "call",
    label: "Call",
    href: "tel:9105300036",
  },
};

export const activeCtaChannels: CtaChannel[] = ["bookOnline", "text", "call"];
