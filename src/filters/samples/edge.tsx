import type { Filter } from "../../types";

export const edge: Filter = {
  name: "Edge",
  apply: (pixels, width, height) => {
    let outputPixels = pixels.slice()
    const colorThreshold = 30; // Adjust the color difference threshold as needed

    const getColorDifference = (pixel1: number[], pixel2: number[]): number => {
 
      return Math.sqrt(
        Math.pow(pixel1[0] - pixel2[0], 2) +
        Math.pow(pixel1[1] - pixel2[1], 2) +
        Math.pow(pixel1[2] - pixel2[2], 2)
      );
    };

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        
          const currentPixelIndex = (y * width + x) * 4;
          const currentPixelColor = [
            pixels[currentPixelIndex],
            pixels[currentPixelIndex + 1],
            pixels[currentPixelIndex + 2],
          ];
          let pixelAboveColor = [
            pixels[((y - 1) * width + x) * 4],
            pixels[((y - 1) * width + x) * 4 + 1],
            pixels[((y - 1) * width + x) * 4 + 2],
          ]
          let pixelBelowColor = [
            pixels[((y + 1) * width + x) * 4],
            pixels[((y + 1) * width + x) * 4 + 1],
            pixels[((y + 1) * width + x) * 4 + 2],
          ]
          let pixelLeftColor = [
            pixels[((y ) * width +(x-1)) * 4],
            pixels[((y) * width + (x-1)) * 4 + 1],
            pixels[((y) * width + (x-1)) * 4 + 2],
          ]
          let pixelRightColor = [
            pixels[((y) * width + (x+1)) * 4],
            pixels[((y) * width + (x+1)) * 4 + 1],
            pixels[((y) * width + (x+1)) * 4 + 2],
          ]
          if (
            getColorDifference(currentPixelColor,pixelAboveColor) > colorThreshold || 
            getColorDifference(currentPixelColor,pixelLeftColor) > colorThreshold || 
            getColorDifference(currentPixelColor,pixelRightColor) > colorThreshold || 
            getColorDifference(currentPixelColor,pixelBelowColor) > colorThreshold
            ) {
         
            outputPixels[currentPixelIndex] = 0; 
            outputPixels[currentPixelIndex + 1] = 0; 
            outputPixels[currentPixelIndex + 2] = 0; 
          }
  
        
      }
    }

    return outputPixels;
  },
};
