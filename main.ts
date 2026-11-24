import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
void here;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "Wrong password \u2014 and the verification code expired while you were looking for it, so this session gave up waiting. Reset your password, then sign in again with the fresh code.";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), entry + "\n", "utf8");
} catch (err) {
  console.error("Failed to write entry.txt:", err && err.message ? err.message : err);
  process.exit(1);
}
