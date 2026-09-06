import config from "@payload-config"
import { RootLayout, handleServerFunctions, metadata } from "@payloadcms/next/layouts"
import type { ServerFunctionClient } from "payload"
import React from "react"
import { importMap } from "./admin/importMap"

export const metadataObj = metadata

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async (args) => {
  "use server"
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

export default function PayloadLayout({ children }: Args) {
  return (
    <RootLayout
      config={Promise.resolve(config)}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}
