import type { Filter } from "../../types";
import { hexToRGBA } from "../../utils";
type borderOptions = {
  Width: number;
  Color: string;
};
export const borderAdjustableColor: Filter<borderOptions> = {
  name: "Custom Color Border",
  apply: (pixels, width, height, options) => {
    // Calculate the total color values for the original image
    const borderWidth = 1700*options.Width/100;
    const borderColor = hexToRGBA(options.Color);


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
    {
      name: "Color",
      type: "color",
      default: "#ff0000",
    },
  ]
    
  };
export default borderOptions;
