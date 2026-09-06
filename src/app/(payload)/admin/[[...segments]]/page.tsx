import config from "@payload-config"
import { RootPage, generatePageMetadata } from "@payloadcms/next/views"
import { importMap } from "../importMap"

type PageProps = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: PageProps) =>
  generatePageMetadata({ config: Promise.resolve(config), params, searchParams })

export default async function PayloadAdminPage({ params, searchParams }: PageProps) {
  return (
    <RootPage
      config={Promise.resolve(config)}
      importMap={importMap}
      params={params}
      searchParams={searchParams}
    />
  )
}
