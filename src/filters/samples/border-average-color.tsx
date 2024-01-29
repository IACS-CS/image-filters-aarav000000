import type { Filter } from "../../types";
type borderOptions = {
  Width: number;
};
export const borderAverageColor: Filter<borderOptions> = {
  name: "Average Color Border",
  apply: (pixels, width, height, options) => {
    // Calculate the total color values for the original image
    const borderWidth = 1700*options.Width/100;
    let totalRed = 0;
    let totalGreen = 0;
    let totalBlue = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      totalRed += pixels[i];
      totalGreen += pixels[i + 1];
      totalBlue += pixels[i + 2];
    }

    // Calculate the average color of the original image
    const averageRed = totalRed / (width * height);
    const averageGreen = totalGreen / (width * height);
    const averageBlue = totalBlue / (width * height);

    // Set border color to the average color
    const borderColor = [averageRed, averageGreen, averageBlue];


    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (
          y < borderWidth || // Top border
          y >= height - borderWidth || // Bottom border
          x < borderWidth || // Left border
          x >= width - borderWidth // Right border
        ) {
      
          const index = (y * width + x) * 4; 
          pixels[index] = borderColor[0]; 
          pixels[index + 1] = borderColor[1]; 
          pixels[index + 2] = borderColor[2]; 
        
        }
      }
    }
  
    return pixels;
  },
  options: [
    {
      name: "Width",
      type: "percentage",
      default: 10,
 
    },
]
    
};
export default borderOptions;
