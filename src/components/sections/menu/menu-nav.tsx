import type { MenuSection } from "@/config/menu-data"

export function MenuNav({ sections }: { sections: MenuSection[] }) {
  if (sections.length < 2) return null
  return (
    <nav className="sticky top-[72px] z-30 -mx-1 px-1 py-2 mb-8 overflow-x-auto scrollbar-none bg-bg/80 backdrop-blur-md">
      <div className="flex gap-2 w-max">
        { sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="whitespace-nowrap px-5 py-2.5 rounded-sm font-display uppercase tracking-wider text-sm border border-border text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent"
          >
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  )
}