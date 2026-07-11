import { CtaButton } from "@/components/primitives/cta-button";
import { activeCtaChannels } from "@/lib/cta";

export function LocationCta() {
  return (
    <section className="border-t border-surface bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-h2 font-semibold text-ink">
              [PLACEHOLDER] location heading
            </h2>
            <dl className="mt-4 space-y-2 text-body text-ink">
              <div>
                <dt className="inline font-medium">Address: </dt>
                <dd className="inline">[PLACEHOLDER] street address, city, state, zip</dd>
              </div>
              <div>
                <dt className="inline font-medium">Hours: </dt>
                <dd className="inline">[PLACEHOLDER] hours of operation</dd>
              </div>
              <div>
                <dt className="inline font-medium">Parking / access: </dt>
                <dd className="inline">[PLACEHOLDER] parking or access notes</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-body-l text-ink">
              [PLACEHOLDER] closing line before the call to action.
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
