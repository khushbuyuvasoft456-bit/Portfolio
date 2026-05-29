import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src', 'assets');

async function optimizeImages() {
  try {
    const files = await fs.readdir(assetsDir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const filePath = path.join(assetsDir, file);
        const webpPath = path.join(assetsDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
        
        console.log(`Converting ${file} to WebP...`);
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        console.log(`Deleting original ${file}...`);
        await fs.unlink(filePath);
      }
    }
    console.log('Optimization complete!');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
