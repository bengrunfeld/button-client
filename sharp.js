const fs = require("fs");
const sharp = require("sharp");

if (!process.argv[2]) throw "ERROR - No target path was provided.";

const path = process.argv[2];

const convertImages = async pathToImg => {
  // Convert to WebP - No resize
  await sharp(pathToImg)
    .webp()
    .toFile(`${pathToImg.slice(0, -4)}.webp`);

  // Convert to WebP - Resize to 350 pixels wide
  await sharp(pathToImg)
    .resize({ width: 350 }) // width, height is automatically calc'ed
    .webp()
    .toFile(`${pathToImg.slice(0, -4)}-small.webp`);

  // Convert to WebP - Resize to 600 pixels wide
  await sharp(pathToImg)
    .resize({ width: 600 }) // width, height is automatically calc'ed
    .webp()
    .toFile(`${pathToImg.slice(0, -4)}-med.webp`);

  // Resize to 350 pixels wide - No conversion
  await sharp(pathToImg)
    .resize({ width: 350 }) // width, height is automatically calc'ed
    .toFile(`${pathToImg.slice(0, -4)}-small.${pathToImg.slice(-3)}`);

  // Resize to 600 pixels wide - No conversion
  await sharp(pathToImg)
    .resize({ width: 600 }) // width, height is automatically calc'ed
    .toFile(`${pathToImg.slice(0, -4)}-med.${pathToImg.slice(-3)}`);
};

convertImages(path);
