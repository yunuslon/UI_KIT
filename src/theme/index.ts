import { createTheme } from '@shopify/restyle';
import { Spacing } from './spacing';
import { BorderRadius } from './borderRadius';
import { Typography } from './typography';
import { BorderWidth } from './borderWidth';
import { lightMode } from './colors/lightMode';
import { darkMode } from './colors/darkMode';

// Base theme structure
const baseTheme = {
  spacing: Spacing,
  borderRadii: BorderRadius,
  textVariants: Typography,
  borderWidths: BorderWidth,
};

const lightTheme = createTheme({
  ...baseTheme,
  colors: {
    ...lightMode,
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    ...darkMode,
  },
});

export type Theme = typeof lightTheme;
export { lightTheme, darkTheme };
