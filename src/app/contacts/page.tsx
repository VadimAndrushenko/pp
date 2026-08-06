import { Breadcrumb } from "@/components/layout/breadcrumb"
import { ContactsHero } from "@/components/sections/contacts/contacts-hero"
import { ContactsActions } from "@/components/sections/contacts/contacts-actions"
import { ContactsMethods } from "@/components/sections/contacts/contacts-methods"
import { ContactsAddress } from "@/components/sections/contacts/contacts-address"
import { ContactsMap } from "@/components/sections/contacts/contacts-map"
import { ContactsForm } from "@/components/sections/contacts/contacts-form"

export default function ContactsPage() {
  return (
    <>
      <Breadcrumb />
      <ContactsHero />
      <ContactsActions />
      <ContactsMethods />
      <ContactsAddress />
      <ContactsMap />
      <ContactsForm />
    </>
  )
}