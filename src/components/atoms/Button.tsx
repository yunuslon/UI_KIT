import type { ComponentProps, ReactNode } from 'react';
import {
  type TouchableOpacityProps,
  TouchableOpacity,
  type TextProps,
} from 'react-native';
import { createBox, type ColorProps } from '@shopify/restyle';
import type { Theme } from '../../theme';
import { Text } from '../foundation';
import { createThemedStyles } from '../../utils';

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type IButtonProps = ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & {
    suffixIcon?: ReactNode;
    prefixIcon?: ReactNode;
    label: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    state?: 'active' | 'disabled';
    overrideStyle?: {
      button: TouchableOpacityProps['style'];
      text: TextProps['style'];
    };
  };

const Button = ({
  suffixIcon,
  prefixIcon,
  label,
  size = 'md',
  state = 'active',
  ...props
}: IButtonProps) => {
  const styles = useStyles();

  const _variant = {
    xs: 'caption-bold',
    sm: 'caption-bold',
    md: 'body-bold',
    lg: 'heading-6-bold',
  }[size];

  const _stateColorBG = {
    active: 'background/solid/bg-brand',
    disabled: 'background/solid/bg-disabled-alt-2',
  }[state];

  return (
    <BaseButton
      borderRadius="radii-small"
      backgroundColor={_stateColorBG as keyof Theme['colors']}
      style={[styles?.[size], props?.overrideStyle?.button]}
      disabled={state === 'disabled'}
    >
      {suffixIcon}
      <Text
        variant={_variant as keyof Theme['textVariants']}
        color="text/solid/white"
        style={props?.overrideStyle?.text}
      >
        {label}
      </Text>
      {prefixIcon}
    </BaseButton>
  );
};

export default Button;

const useStyles = createThemedStyles((theme) => ({
  xs: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 148,
    minHeight: 16,
    paddingVertical: theme.spacing['spacing-x-small'],
    paddingHorizontal: theme.spacing['spacing-medium'],
    rowGap: theme.spacing['spacing-3x-small'],
  },
  sm: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 148,
    minHeight: 20,
    paddingVertical: theme.spacing['spacing-x-small'],
    paddingHorizontal: theme.spacing['spacing-medium'],
    rowGap: theme.spacing['spacing-2x-small'],
  },
  md: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 148,
    minHeight: 20,
    paddingVertical: theme.spacing['spacing-small'],
    paddingHorizontal: theme.spacing['spacing-medium'],
    rowGap: theme.spacing['spacing-2x-small'],
  },
  lg: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 148,
    minHeight: 24,
    paddingV: theme.spacing['spacing-medium'],
    rowGap: theme.spacing['spacing-x-small'],
  },
}));
