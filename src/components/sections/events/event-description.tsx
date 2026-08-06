interface EventDescriptionProps {
  description: string
}

export function EventDescription({ description }: EventDescriptionProps) {
  return (
    <p className="section-py border-l-2 border-accent pl-4 text-sm leading-relaxed text-text-secondary lg:pl-6 lg:text-xl">
      {description}
    </p>
  )
}