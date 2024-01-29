import type { Filter } from "../../types";
type borderOptions = {
  Threshold: number;
};
export const threshold: Filter = {
  name: "Black And White",
  apply: (pixels, width, height, options) => {
    const thresholdValue =  255*options.Threshold/100;

    for (let i = 0; i < pixels.length; i += 4) {
    
      const red = pixels[i];
      const green = pixels[i + 1];
      const blue = pixels[i + 2];

     
      const grayscale = 0.299 * red + 0.587 * green + 0.114 * blue; //chatGPT got me the math for it

      
      const newValue = grayscale > thresholdValue ? 255 : 0;

    
      pixels[i] = newValue;
      pixels[i + 1] = newValue;
      pixels[i + 2] = newValue;
    }

    return pixels;
  },
  options: [
    {
      name: "Threshold",
      type: "percentage",
      default: 128,

    },
]
};
export default borderOptions;