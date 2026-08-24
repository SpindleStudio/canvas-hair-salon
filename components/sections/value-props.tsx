const valueProps = [
  {
    number: "01",
    title: "God-given, naturally beautiful hair",
    description: "Lived-in, dimensional colour that grows out seamlessly, low maintenance, built to last months without looking neglected.",
  },
  {
    number: "02",
    title: "A thoughtful intake process",
    description: "New clients share their hair history, goals, and photos upfront, so your stylist is prepared before you ever walk in.",
  },
  {
    number: "03",
    title: "Intentional appointments",
    description: "No double-booking. Every slot belongs to you, including our full attention.",
  },
];

export function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-3">
        {valueProps.map((prop) => (
          <div key={prop.title}>
            <p className="text-caption font-medium uppercase tracking-widest text-muted">{prop.number}</p>
            <h2 className="mt-2 font-display text-h3 text-ink">{prop.title}</h2>
            <p className="mt-2 text-body text-muted">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
