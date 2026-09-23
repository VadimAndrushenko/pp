import * as fs from "fs"
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2]
}
const { getPayload } = await import("payload")
const { default: config } = await import("./payload.config.ts")
const payload = await getPayload({ config })
const db = payload.db as any
const pool = db.pool
const real: Record<string, Set<string>> = {}
const r = await pool.query("select table_name, column_name from information_schema.columns where table_schema='public'")
for (const row of r.rows) (real[row.table_name] ??= new Set()).add(row.column_name)
const missing: { table: string; col: string; type?: string }[] = []
for (const [tname, tdef] of Object.entries(db.tables as Record<string, any>)) {
  if (typeof tdef !== "object" || tdef === null) continue
  const fieldKeys = Object.keys(tdef)
  const colSet = new Set<string>()
  for (const k of fieldKeys) {
    const f = tdef[k]
    if (f && typeof f === "object" && typeof (f as any).column === "string") colSet.add((f as any).column)
  }
  if (colSet.size === 0) continue
  const have = real[tname]
  if (!have) { console.log(`TABLE MISSING: ${tname}`); continue }
  for (const c of colSet) {
    if (c === "id") continue
    if (!have.has(c)) missing.push({ table: tname, col: c })
  }
}
console.log("MISSING_COLS:", JSON.stringify(missing))
process.exit(0)
