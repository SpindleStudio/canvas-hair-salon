export function BookLogistics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-h1 font-display text-ink">[PLACEHOLDER] book page heading</h1>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <dl className="space-y-2 text-body text-ink">
          <div>
            <dt className="inline font-medium">Address: </dt>
            <dd className="inline">[PLACEHOLDER] street address, city, state, zip</dd>
          </div>
          <div>
            <dt className="inline font-medium">Hours: </dt>
            <dd className="inline">[PLACEHOLDER] hours of operation</dd>
          </div>
          <div>
            <dt className="inline font-medium">Phone: </dt>
            <dd className="inline">[PLACEHOLDER] phone number</dd>
          </div>
          <div>
            <dt className="inline font-medium">Email: </dt>
            <dd className="inline">[PLACEHOLDER] email address</dd>
          </div>
        </dl>
        <div className="flex aspect-video items-center justify-center bg-surface text-caption text-muted">
          [PLACEHOLDER] map embed
        </div>
      </div>
    </section>
  );
}
