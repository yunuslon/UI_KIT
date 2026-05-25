import { is } from '../../../theme/scaling';
import CustomIcon from './customIcon';
import { nameIcon } from './types';
import type { StyleProp, TextStyle } from 'react-native';
const Icons = ({
  testID = 'icons_id',
  name = 'activity',
  size = 24,
  color = 'black',
  style,
}: {
  testID?: string;
  name: keyof typeof nameIcon;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <CustomIcon
      style={style as any}
      accessibilityLabel={testID || 'icons_id'}
      name={name}
      size={is(size)}
      color={color}
      testID={testID}
    />
  );
};

export default Icons;
