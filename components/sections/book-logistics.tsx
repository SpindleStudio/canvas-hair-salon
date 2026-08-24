export function BookLogistics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-h1 text-ink">Book</h1>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <dl className="space-y-2 text-body text-ink">
          <div>
            <dt className="inline font-medium">Address: </dt>
            <dd className="inline">1510 Castle St Unit 1, Wilmington, NC 28401</dd>
          </div>
          <div>
            <dt className="inline font-medium">Hours: </dt>
            <dd className="inline">Mon 9-6 · Tue 9-6 · Wed 9:30-5 · Thu 10-5 · Fri 9:30-5 · Sat closed · Sun 9-5</dd>
          </div>
          <div>
            <dt className="inline font-medium">Phone: </dt>
            <dd className="inline"><a href="tel:9105300036" className="underline underline-offset-2">(910) 530-0036</a></dd>
          </div>
          <div>
            <dt className="inline font-medium">Cancellation: </dt>
            <dd className="inline">80% fee for no-shows or cancellations within 24 hours</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
