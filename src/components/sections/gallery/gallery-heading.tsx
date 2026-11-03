export function GalleryHeading({ title }: { title: string }) {
  return (
    <section className="section-py">
      <h1 className="text-4xl max-md:text-3xl font-display font-bold uppercase tracking-tight text-text-primary mb-2">
        {title}
      </h1>
    </section>
  )
}