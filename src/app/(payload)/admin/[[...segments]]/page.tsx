import type { Metadata } from "next"
import configPromise from "@payload-config"
import { generatePageMetadata, RootPage } from "@payloadcms/next/views"

export const dynamic = "force-static"
export const revalidate = 600

import { importMap } from "../importMap"

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export function generateMetadata({ params, searchParams }: Args): Promise<Metadata> {
  return generatePageMetadata({ config: configPromise, params, searchParams })
}

export default async function Page({ params, searchParams }: Args) {
  return (
    <RootPage
      config={configPromise}
      importMap={importMap}
      params={params}
      searchParams={searchParams}
    />
  )
}
