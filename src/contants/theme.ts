import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  //  base color;
  primary: '#24c16b',
  secondary: '#0c381f',

  green: '#66d59a',
  lightGreen: '#e6fef0',

  lime: '#00ba63',
  emerald: '#2bc978',

  red: '#ff4134',
  lightRed: '#fff1f0',

  yellow: '#ffc664',
  lightyellow: '#fff9ec',

  black: '#1e1f20',
  white: '#ffffff',

  lightGray: '#fcfbfc',
  gray: '#c1c3c5',
  darkgray: '#c3c6c7',

  purple: '#6b3ce9',
  lightpurple: '#f3efff',

  transparent: 'transparent',
};

export const SIZES = {
  // global sizex;
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // fontSize
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimension
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-regular', fontSize: SIZES.body5, lineHeight: 22},
};
