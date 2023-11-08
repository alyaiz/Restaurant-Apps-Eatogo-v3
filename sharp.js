const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'src/public/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  const imagePath = path.resolve(target, image);
  const imageExt = path.extname(image).toLowerCase();

  if (imageExt === '.jpg' || imageExt === '.jpeg') {
    // Menghasilkan versi JPEG
    sharp(imagePath)
      .resize(800)
      .toFile(
        path.resolve(
          destination,
          `${image.split('.').slice(0, -1).join('.')}-large.jpg`,
        ),
      );

    sharp(imagePath)
      .resize(480)
      .toFile(
        path.resolve(
          destination,
          `${image.split('.').slice(0, -1).join('.')}-small.jpg`,
        ),
      );
  } else if (imageExt === '.png') {
    // Menghasilkan versi PNG
    sharp(imagePath)
      .resize(800)
      .toFile(
        path.resolve(
          destination,
          `${image.split('.').slice(0, -1).join('.')}-large.png`,
        ),
      );

    sharp(imagePath)
      .resize(480)
      .toFile(
        path.resolve(
          destination,
          `${image.split('.').slice(0, -1).join('.')}-small.png`,
        ),
      );
  }
});
