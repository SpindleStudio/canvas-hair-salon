import { Calendar, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

import { Button, type ButtonProps } from "@/components/primitives/button";
import { ctaDefinitions, type CtaChannel } from "@/lib/cta";
import { cn } from "@/lib/utils";

const channelIcons = {
  bookOnline: Calendar,
  text: MessageSquare,
  call: Phone,
} as const;

interface CtaButtonProps extends Omit<ButtonProps, "children"> {
  channel: CtaChannel;
}

export function CtaButton({ channel, className, variant, size, ...props }: CtaButtonProps) {
  const { label, href } = ctaDefinitions[channel];
  const Icon = channelIcons[channel];

  return (
    <Button asChild variant={variant} size={size} className={cn(className)} {...props}>
      <Link href={href}>
        <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
        {label}
      </Link>
    </Button>
  );
}
