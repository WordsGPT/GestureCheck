import fs from "node:fs";
import path from "node:path";

const [resultsDirectory, shardCountText = "4"] = process.argv.slice(2);
if (!resultsDirectory) {
  throw new Error("Usage: node scripts/build_retest_shards.mjs <results-directory> [shard-count]");
}

const root = path.resolve(import.meta.dirname, "..");
const manifestPath = path.join(root, "tests", "retest_20260915", "all_videos_neutral.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const absoluteResults = path.resolve(root, resultsDirectory);
const shardCount = Number.parseInt(shardCountText, 10);
const remaining = manifest.filter((item) => {
  const resultName = `${path.parse(item.title).name}.rating.json`;
  return !fs.existsSync(path.join(absoluteResults, resultName));
});
const shards = Array.from({ length: shardCount }, () => []);
remaining.forEach((item, index) => shards[index % shardCount].push(item));

const shardDirectory = path.join(absoluteResults, "shards");
fs.mkdirSync(shardDirectory, { recursive: true });
shards.forEach((items, index) => {
  fs.writeFileSync(
    path.join(shardDirectory, `shard_${String(index + 1).padStart(2, "0")}.json`),
    `${JSON.stringify(items, null, 2)}\n`,
  );
});
console.log(`Remaining ${remaining.length}; shard sizes: ${shards.map((items) => items.length).join(", ")}`);
