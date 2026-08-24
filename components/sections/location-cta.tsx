import { CtaButton } from "@/components/primitives/cta-button";
import { activeCtaChannels } from "@/lib/cta";

export function LocationCta() {
  return (
    <section className="border-t border-surface bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-h2 text-ink">The Cargo District, Wilmington NC</h2>
            <dl className="mt-4 space-y-2 text-body text-ink">
              <div>
                <dt className="inline font-medium">Address: </dt>
                <dd className="inline">1510 Castle St Unit 1, Wilmington, NC 28401</dd>
              </div>
              <div>
                <dt className="inline font-medium">Hours: </dt>
                <dd className="inline">Mon 9-6 · Tue 9-6 · Wed 9:30-5 · Thu 10-5 · Fri 9:30-5 · Sat closed · Sun 9-5</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-body-l text-ink">
              Returning client? Head straight to booking. New to Canvas? Start with the intake form - takes about 3 minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              {activeCtaChannels.map((channel) => (
                <CtaButton key={channel} channel={channel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
