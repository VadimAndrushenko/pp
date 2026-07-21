import { Breadcrumb } from "@/components/layout/breadcrumb"
import { ContactsGrid } from "@/components/sections/contacts/contacts-grid"

export default function ContactsPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <ContactsGrid />
      </div>
    </div>
  )
}
