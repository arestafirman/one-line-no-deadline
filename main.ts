// One Line, No Deadline Met — entry writer.
// Writes a single-line joke excusing a missed deadline to /output/entry.txt.
// No network, no dependencies. Runs on Node 22 (type stripping) and Node 24.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I sent it on time — to Dave in Accounting, who retired in 2019 and still hasn't replied.";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

// Gate check, mirroring the scorer: 1–200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} characters`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
