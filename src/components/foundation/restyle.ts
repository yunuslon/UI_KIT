import {
  backgroundColor,
  backgroundColorShorthand,
  border,
  createRestyleFunction,
  layout,
  opacity,
  shadow,
  spacing,
  spacingShorthand,
  visible,
  type BackgroundColorProps,
  type BackgroundColorShorthandProps,
  type BorderProps,
  type LayoutProps,
  type OpacityProps,
  type PositionProps,
  type ShadowProps,
  type SpacingProps,
  type SpacingShorthandProps,
  type VisibleProps,
} from '@shopify/restyle';
import { type ViewProps } from 'react-native';
import type { Theme } from '../../theme';

// Restyle's `border` function handles raw border widths. We override each
// border width property to resolve tokens against `theme.borderWidths`.
// IMPORTANT: these MUST come before `border` in the restyle function array,
// because Restyle's funcsMap is built so the earliest occurrence wins.
const borderWidthProperties = [
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStartWidth',
  'borderEndWidth',
] as const;

const borderWidthFunctions = borderWidthProperties.map((property) =>
  createRestyleFunction({
    property,
    themeKey: 'borderWidths',
  })
);

type BorderWidthToken = keyof Theme['borderWidths'];
type BorderWidthProps = {
  [Key in (typeof borderWidthProperties)[number]]?: BorderWidthToken;
};

export type TBoxProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Omit<BorderProps<Theme>, keyof BorderWidthProps> &
  BorderWidthProps &
  ShadowProps<Theme> &
  PositionProps<Theme> &
  ViewProps;

export const listRestyleComponent = [
  ...borderWidthFunctions,
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  visible,
  layout,
  spacing,
  spacingShorthand,
  border,
  shadow,
];
