// utils/createThemedStyles.ts

import { useMemo } from 'react';
import {
  StyleSheet,
  type ImageStyle,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import type { Theme } from '../theme';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export function createThemedStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  factory: (theme: Theme) => T | NamedStyles<T>
) {
  return function useStyles() {
    const theme = useTheme<Theme>();
    return useMemo(() => StyleSheet.create(factory(theme) as T), [theme]);
  };
}
