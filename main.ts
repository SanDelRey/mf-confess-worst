import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 200 // gate: 1..200 characters
const ENTRY = "I told a journalist my model had 200 million users. I got the number from a tweet I wrote. I then cited myself in the correction."

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
if (ENTRY.length < 1 || ENTRY.length > LIMIT) throw new RangeError("entry length " + ENTRY.length)
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8")
