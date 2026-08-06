import Link from "next/link"

export interface FooterNavLink {
  label: string
  href: string
}

interface FooterNavProps {
  title: string
  links: readonly FooterNavLink[]
}

export function FooterNav({ title, links }: FooterNavProps) {
  return (
    <div>
      <h2 className="font-display font-bold uppercase text-xs tracking-widest text-accent">
        {title}
      </h2>
      <ul className="mt-4 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="link-accent inline-block py-1 text-base text-text-secondary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
