import * as fs from "node:fs/promises";
import * as sxarp from "sharp";

const source = process.argv[2];
const target = process.argv[3];
const width = Number(process.argv[4]) || 500;
const height = Number(process.argv[5]) || 700;

async function compress(source, target, width, height) {
  try {
    const files = await fs.readdir(source);

    for (let file of files) {
      const name = file.split(".")[0];
      const inputPath = `./${source}/${file}`;
      const outputPath = `./${target}/${name}.webp`;

      await sxarp
        .default(inputPath)
        .resize({ width, height, fit: "inside" })
        .webp({ quality: 80 })
        .toFile(outputPath);
    }
  } catch (error) {
    console.log(error);
  }
}

compress(source, target, width, height);
