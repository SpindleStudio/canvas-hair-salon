import { CtaButton } from "@/components/primitives/cta-button";
import { activeCtaChannels } from "@/lib/cta";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h1 className="text-h1 font-semibold text-ink">
        [PLACEHOLDER] brand statement, one line, specific to this client
      </h1>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {activeCtaChannels.map((channel) => (
          <CtaButton key={channel} channel={channel} size="lg" />
        ))}
      </div>
    </section>
  );
}
