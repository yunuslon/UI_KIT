import { createRestyleComponent } from '@shopify/restyle';
import { View } from 'react-native';
import type { Theme } from '../../theme';
import { listRestyleComponent, type TBoxProps } from './restyle';

const Box = createRestyleComponent<TBoxProps, Theme>(
  listRestyleComponent,
  View
);

export default Box;
