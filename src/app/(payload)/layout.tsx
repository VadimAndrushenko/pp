import configPromise from "@payload-config"
import "@payloadcms/next/css"
import { handleServerFunctions, metadata, RootLayout } from "@payloadcms/next/layouts"
import type { ServerFunctionClient } from "payload"
import React from "react"

import { importMap } from "./admin/importMap"

function PayloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={handleServerFunctions as ServerFunctionClient}
    >
      {children}
    </RootLayout>
  )
}

export default PayloadLayout
export { metadata }