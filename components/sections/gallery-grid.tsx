const galleryItems = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  caption: "",
}));

export function GalleryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-h1 font-display text-ink">[PLACEHOLDER] gallery heading</h1>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {galleryItems.map((item) => (
          <figure key={item.id}>
            <div className="flex aspect-square items-center justify-center bg-surface text-caption text-muted">
              [PLACEHOLDER] image {item.id}
            </div>
            {item.caption && (
              <figcaption className="mt-2 text-caption text-muted">{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
