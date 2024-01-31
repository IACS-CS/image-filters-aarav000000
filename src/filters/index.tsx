import type { Filter } from "../types";
import {brighten} from './samples/brighten';
import {darken} from './samples/darken';
import {threshold} from './samples/threshold';
import {edge} from './samples/edge';
import {borderAverageColor} from './samples/border-average-color';
import {borderAdjustableColor} from './samples/border-adjustable-color';
const filters: Filter[] = [
  brighten,
  darken,
  threshold,
  edge,
  borderAverageColor,
  borderAdjustableColor,
];
export default filters;
