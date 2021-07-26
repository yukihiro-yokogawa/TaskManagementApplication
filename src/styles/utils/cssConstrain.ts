export const COLOR = {
  PRIMARY: '#4169e1',
  SECONDARY: '#ffe4e1',
  SUCCESS: '#00ff7f',
  INFO: '#87cefa',
  DANGER: '#ff0000',
  CAUTION: '#ffff00',
  WHITE: `#FFF`,
};

export const FONT = {
  XXXLARGE: 32,
  XXLARGE: 24,
  XLARGE: 18,
  LARGE: 16,
  MEDIUM: 14,
  BASE: 12,
  SMALL: 11,
  XSMALL: 10,
  TINY: 8,
} as const;

export const FONT_WEIGHT = {
  NORMAL: 400,
  BOLD: 600,
} as const;

export const BORDER_RADIUS = 4 as 4;

const SIZE = {
  MOBILE_S: '320px',
  MOBILE_M: '375px',
  MOBILE_L: '425px',
  TABLET: '768px',
  LAPTOP: '1024px',
  LAPTOP_L: '1440px',
  DESKTOP: '1920px',
  DESKTOP_L: '2560px',
};

export const DEVICE = {
  MOBILE_S: `(max-width: ${SIZE.MOBILE_S})`,
  MOBILE_M: `(max-width: ${SIZE.MOBILE_M})`,
  MOBILE_L: `(max-width: ${SIZE.MOBILE_L})`,
  TABLET: `(max-width: ${SIZE.TABLET})`,
  LAPTOP: `(max-width: ${SIZE.LAPTOP})`,
  LAPTOP_L: `(max-width: ${SIZE.LAPTOP_L})`,
  DESKTOP: `(max-width: ${SIZE.DESKTOP})`,
  DESKTOP_L: `(max-width: ${SIZE.DESKTOP_L})`,
};
