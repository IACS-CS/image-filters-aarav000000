import type { Filter } from "../../types";

export const border: Filter = {
  name: "Border",
  apply: (pixels, width, height) => {
    let totalRed = 0;
    let totalGreen = 0;
    let totalBlue = 0;


    for (let i = 0; i < pixels.length; i += 4) {
      totalRed += pixels[i];
      totalGreen += pixels[i + 1];
      totalBlue += pixels[i + 2];
    }

  
    const averageRed = totalRed / (pixels.length / 4);
    const averageGreen = totalGreen / (pixels.length / 4);
    const averageBlue = totalBlue / (pixels.length / 4);

    // Set border color to the average color
    const borderColor = [averageRed, averageGreen, averageBlue];

    // Set all pixels to the average color
    for (let i = 0; i < pixels.length; i += 4) {
      pixels[i] = borderColor[0];
      pixels[i + 1] = borderColor[1];
      pixels[i + 2] = borderColor[2];
    }

    return pixels;
  },
};