export function GalleryReportsHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <section className="section-py">
      <h2 id="reports" className="section-heading scroll-mt-20 font-display font-bold uppercase tracking-tight text-text-primary mb-2">
        {title}
      </h2>
      <p className="text-sm font-display uppercase tracking-wider mb-6 text-accent">
        {subtitle}
      </p>
    </section>
  )
}