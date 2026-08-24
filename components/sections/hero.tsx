import { CtaButton } from "@/components/primitives/cta-button";
import { activeCtaChannels } from "@/lib/cta";

export function Hero() {
  return (
    <section className="bg-[#2b2420] px-6 py-24 text-[#f6f4eb]">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-h1 font-normal italic leading-tight">
          Natural<br />
          Beautiful<br />
          Color.
        </h1>
        <p className="mt-6 max-w-xl text-body-l text-[#c8bfb0]">
          A boutique suite salon in Wilmington&rsquo;s Cargo District, where Carly and Kaitlin
          bring intention and craft to every single appointment.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          {activeCtaChannels.map((channel) => (
            <CtaButton key={channel} channel={channel} size="lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
