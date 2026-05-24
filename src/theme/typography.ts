import { moderateScale } from 'react-native-size-matters';
import { fs } from './scaling';
import { Platform } from 'react-native';

const ls = (percentage: number, fontSize: number, factor = 0.3) => {
  return moderateScale(fontSize, factor) * (percentage / 100);
};

const isIos = (v: number) => (Platform.OS === 'ios' ? {} : { lineHeight: v });

export const Typography = {
  'heading-1-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(56),
    ...isIos(64),
    letterSpacing: ls(56, -3),
  },
  'heading-1-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(56),
    ...isIos(64),
    letterSpacing: ls(56, -3),
  },
  'heading-1-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(56),
    ...isIos(64),
    letterSpacing: ls(56, -3),
  },
  'heading-2-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(48),
    ...isIos(56),
    letterSpacing: ls(48, -3),
  },
  'heading-2-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(48),
    ...isIos(56),
    letterSpacing: ls(48, -3),
  },
  'heading-2-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(48),
    ...isIos(56),
    letterSpacing: ls(48, -3),
  },
  'heading-3-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(32),
    ...isIos(40),
    letterSpacing: ls(32, -2.5),
  },
  'heading-3-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(32),
    ...isIos(40),
    letterSpacing: ls(32, -2.5),
  },
  'heading-3-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(32),
    ...isIos(40),
    letterSpacing: ls(32, -2.5),
  },
  'heading-4-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(24),
    ...isIos(32),
    letterSpacing: ls(24, -1.5),
  },
  'heading-4-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(24),
    ...isIos(32),
    letterSpacing: ls(24, -1.5),
  },
  'heading-4-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(24),
    ...isIos(32),
    letterSpacing: ls(24, -1.5),
  },
  'heading-5-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(20),
    ...isIos(28),
    letterSpacing: ls(20, -1.5),
  },
  'heading-5-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(20),
    ...isIos(28),
    letterSpacing: ls(20, -1.5),
  },
  'heading-5-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(20),
    ...isIos(28),
    letterSpacing: ls(20, -1.5),
  },
  'heading-6-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(16),
    ...isIos(24),
    letterSpacing: ls(16, -1),
  },
  'heading-6-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(16),
    ...isIos(24),
    letterSpacing: ls(16, -1),
  },
  'heading-6-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(16),
    ...isIos(24),
    letterSpacing: ls(16, -1),
  },
  'title-screen-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(32),
    ...isIos(40),
    letterSpacing: ls(32, -2.5),
  },
  'title-screen-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(32),
    ...isIos(40),
    letterSpacing: ls(32, -2.5),
  },
  'title-screen-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(32),
    ...isIos(40),
    letterSpacing: ls(32, -2.5),
  },

  'title-section-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(24),
    ...isIos(32),
    letterSpacing: ls(24, -1.5),
  },
  'title-section-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(24),
    ...isIos(32),
    letterSpacing: ls(24, -1.5),
  },
  'title-section-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(24),
    ...isIos(32),
    letterSpacing: ls(24, -1.5),
  },

  'title-subsection-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(20),
    ...isIos(28),
    letterSpacing: ls(20, -1.5),
  },
  'title-subsection-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(20),
    ...isIos(28),
    letterSpacing: ls(20, -1.5),
  },
  'title-subsection-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(20),
    ...isIos(28),
    letterSpacing: ls(20, -1.5),
  },

  'headline-bold': {
    fontFamily: 'Inter-Bold',
    fontSize: fs(16),
    ...isIos(24),
  },
  'headline-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(16),
    ...isIos(24),
  },
  'headline-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(16),
    ...isIos(24),
  },

  'body-bold': {
    fontFamily: 'Inter-SemiBold',
    fontSize: fs(14),
    ...isIos(20),
  },
  'body-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(14),
    ...isIos(20),
  },
  'body-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(14),
    ...isIos(20),
  },

  'caption-bold': {
    fontFamily: 'Inter-SemiBold',
    fontSize: fs(12),
    ...isIos(16),
  },
  'caption-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(12),
    ...isIos(16),
  },
  'caption-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(12),
    ...isIos(16),
  },

  'caption-small-bold': {
    fontFamily: 'Inter-SemiBold',
    fontSize: fs(10),
    ...isIos(12),
  },
  'caption-small-medium': {
    fontFamily: 'Inter-Medium',
    fontSize: fs(10),
    ...isIos(12),
  },
  'caption-small-regular': {
    fontFamily: 'Inter-Regular',
    fontSize: fs(10),
    ...isIos(12),
  },
};
