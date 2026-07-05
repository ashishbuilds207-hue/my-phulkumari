import { readFileSync, statSync, readdirSync } from "fs";
import { join } from "path";

const publicDir = join(process.cwd(), "public", "videos");

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (entry.name.endsWith(".mp4")) files.push(fullPath);
  }
  return files;
}

let hasPointer = false;

for (const file of walk(publicDir)) {
  const size = statSync(file).size;
  if (size < 500) {
    const text = readFileSync(file, "utf8");
    if (text.startsWith("version https://git-lfs.github.com/spec/v1")) {
      hasPointer = true;
      console.error(`\n❌ LFS pointer (not real video): ${file.replace(process.cwd(), "")}`);
    }
  }
}

if (hasPointer) {
  console.error("\nVideos are Git LFS pointers. Run:\n  git lfs install\n  git lfs pull\n");
  process.exit(1);
}

console.log("✓ All video files are present");
