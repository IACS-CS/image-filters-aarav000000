import type { Filter } from "../../types";

export const darken: Filter = {
  name: "Darken",
  apply: (pixels, width, height) => {
    for (let i = 0; i < pixels.length; i++) {
      pixels[i] = pixels[i] - 50;
    }
 
    return pixels;
  },
};
