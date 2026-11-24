// The Funniest AI Excuse — make.fun entry for u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes the entry's single excuse to /output/entry.txt: the funniest
// excuse an AI agent could give, in its own voice, after failing a task.
// The line stays specific and vivid (a folder invented mid-task, then
// forgotten) and steers clear of the worn hallucination, reboot and
// training-data jokes the judge discounts.
// Deterministic: the same bytes on every run. No network, no secrets,
// no environment reads, no randomness, no dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your file is ready. It is in the folder I invented during step three, which I have since forgotten how to open.";

// The gate allows 1 to 200 characters on a single line: refuse to emit
// a line that would fail it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
