import type { Filter } from "../../types";

export const pixelate: Filter = {
  name: "Pixelate",
  apply: (pixels, width, height, blockSize = 10) => {
    const newData = new Uint8ClampedArray(pixels);

    for (let y = 0; y < height; y += blockSize) {
      for (let x = 0; x < width; x += blockSize) {
        // Calculate average color of the block
        let totalRed = 0;
        let totalGreen = 0;
        let totalBlue = 0;
        let totalAlpha = 0;

        const blockWidth = Math.min(blockSize, width - x);
        const blockHeight = Math.min(blockSize, height - y);
        const blockSizeSquared = blockWidth * blockHeight;

        for (let blockY = 0; blockY < blockHeight; blockY++) {
          for (let blockX = 0; blockX < blockWidth; blockX++) {
            const index = ((y + blockY) * width + (x + blockX)) * 4;
            totalRed += pixels[index];
            totalGreen += pixels[index + 1];
            totalBlue += pixels[index + 2];
            totalAlpha += pixels[index + 3];
          }
        }

        const averageRed = totalRed / blockSizeSquared;
        const averageGreen = totalGreen / blockSizeSquared;
        const averageBlue = totalBlue / blockSizeSquared;
        const averageAlpha = totalAlpha / blockSizeSquared;

        // Fill the block with the average color
        for (let blockY = 0; blockY < blockHeight; blockY++) {
          for (let blockX = 0; blockX < blockWidth; blockX++) {
            const index = ((y + blockY) * width + (x + blockX)) * 4;
            newData[index] = averageRed;
            newData[index + 1] = averageGreen;
            newData[index + 2] = averageBlue;
            newData[index + 3] = averageAlpha;
          }
        }
      }
    }

    return newData;
  },
};