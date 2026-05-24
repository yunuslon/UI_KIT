import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

/**
 * Horizontal scale
 * Cocok untuk:
 * width, marginHorizontal, paddingHorizontal
 */
export const hs = (size: number) => {
  return scale(size);
};

/**
 * Vertical scale
 * Cocok untuk:
 * height, marginVertical, paddingVertical
 */
export const vs = (size: number) => {
  return verticalScale(size);
};

/**
 * Moderate scale
 * Scaling lebih aman & stabil
 * Cocok untuk:
 * font, icon, radius
 */
export const ms = (size: number, factor = 0.5) => {
  return moderateScale(size, factor);
};

/**
 * Moderate vertical scale
 * Cocok untuk:
 * card height, button height
 */
export const mvs = (size: number, factor = 0.5) => {
  return moderateVerticalScale(size, factor);
};

/**
 * Font scale helper
 * Production apps biasanya pakai moderate scaling untuk font
 */
export const fs = (size: number) => {
  return moderateScale(size, 0.3);
};

/**
 * Radius helper
 */
export const rs = (size: number) => {
  return moderateScale(size, 0.2);
};

/**
 * Icon helper
 */
export const is = (size: number) => {
  return moderateScale(size, 0.4);
};
