const valueProps = [
  {
    title: "[PLACEHOLDER] differentiator one",
    description: "[PLACEHOLDER] one to two sentences on why this matters to the client's customers.",
  },
  {
    title: "[PLACEHOLDER] differentiator two",
    description: "[PLACEHOLDER] one to two sentences on why this matters to the client's customers.",
  },
  {
    title: "[PLACEHOLDER] differentiator three",
    description: "[PLACEHOLDER] one to two sentences on why this matters to the client's customers.",
  },
];

export function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-3">
        {valueProps.map((prop) => (
          <div key={prop.title}>
            <h2 className="text-h3 font-display text-ink">{prop.title}</h2>
            <p className="mt-2 text-body text-muted">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
