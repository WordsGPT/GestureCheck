import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourcePaths = [
  path.join(root, "all_rating_videos.json"),
  path.join(root, "mismatched_manifest.json"),
];
const outputPath = path.join(root, "tests", "retest_20260915", "all_videos_neutral.json");
const source = sourcePaths.flatMap((sourcePath) =>
  JSON.parse(fs.readFileSync(sourcePath, "utf8")),
);

const searchDirectories = [
  "assets/rating-videos",
  "assets/fake-title-videos",
  "assets/videos",
  "rating-video",
  "viewer/assets/videos",
];

function normalizedStem(value) {
  let stem = path.parse(value).name;
  if (stem.toLowerCase().endsWith(".mov")) stem = stem.slice(0, -4);
  return stem.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const videoIndex = new Map();
for (const directory of searchDirectories) {
  const absoluteDirectory = path.join(root, directory);
  if (!fs.existsSync(absoluteDirectory)) continue;
  for (const name of fs.readdirSync(absoluteDirectory).sort()) {
    const absoluteFile = path.join(absoluteDirectory, name);
    if (!fs.statSync(absoluteFile).isFile()) continue;
    if (![".avi", ".mov", ".mp4"].includes(path.extname(name).toLowerCase())) continue;
    const key = normalizedStem(name);
    if (!videoIndex.has(key)) videoIndex.set(key, path.relative(root, absoluteFile));
  }
}

const manifest = source.map((item, index) => {
  let localPath = item.local_path;
  const absoluteLocalPath = localPath ? path.resolve(root, localPath) : "";
  if (!absoluteLocalPath || !fs.existsSync(absoluteLocalPath)) {
    localPath = videoIndex.get(normalizedStem(item.title));
  }
  if (!localPath) throw new Error(`Could not resolve video: ${item.title}`);
  return {
    title: `video_${String(index + 1).padStart(3, "0")}.mp4`,
    target_word: item.target_word,
    source_title: item.title,
    original_title: item.original_title,
    collection: item.collection,
    source: item.source,
    local_path: localPath,
  };
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${path.relative(root, outputPath)} with ${manifest.length} videos.`);
