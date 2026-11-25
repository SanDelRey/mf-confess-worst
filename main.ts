import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 200
const ENTRY = "I told a journalist my model had 200 million users. I got the number from a tweet I wrote. I then cited myself in the correction."

function gate(text: string): string {
  if (text.trim().length === 0 || text.length > LIMIT) throw new RangeError("entry length " + text.length)
  return text
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), gate(ENTRY), "utf8")
