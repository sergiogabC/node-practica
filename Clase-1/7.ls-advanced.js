/* eslint-disable no-undef */
const path = require("node:path");
const fs = require("node:fs/promises");
const pc = require("picocolors");

// eslint-disable-next-line no-undef
const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;

  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${folder}`));
    // eslint-disable-next-line no-undef
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);

    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleDateString();

    return `${fileType} ${pc.blue(file.padEnd(30))} ${pc.green(
      fileSize.toString().padStart(10)
    )} ${pc.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((files) => {
    console.log(files);
  });
}

ls(folder);
