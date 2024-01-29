import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import {brighten} from './samples/brighten';
import {darken} from './samples/darken';
import {threshold} from './samples/threshold';
import {edge} from './samples/edge';
import {borderAverageColor} from './samples/border-average-color';
import {borderAdjustableColor} from './samples/border-adjustable-color';
const filters: Filter[] = [
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
  brighten,
  darken,
  threshold,
  edge,
  borderAverageColor,
  borderAdjustableColor,
];
export default filters;
