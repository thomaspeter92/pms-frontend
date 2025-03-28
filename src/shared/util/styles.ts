import { Priority } from "../constants/issues";

export const color = {
  primary: "#2A7BF3", // Blue
  success: "#22C55E", // green
  danger: "#FB2C36", // red
  warning: "#FACC15", // orange

  grayFaint: "#F3F5F9",
  grayLight: "#E1E5EC",
  grayMed: "#C0CDDE",
  grayDark: "#64748B",

  textDarkest: "#172b4d",
  textDark: "#42526E",
  textMedium: "#5E6C84",
  textLight: "#8993a4",
  textLink: "#0052cc",

  backgroundDarkPrimary: "#0747A6",
  backgroundMedium: "#dfe1e6",
  backgroundLight: "#ebecf0",
  backgroundLightest: "#F4F5F7",
  backgroundLightPrimary: "#D2E5FE",
  backgroundLightSuccess: "#E4FCEF",

  borderLightest: "#dfe1e6",
  borderLight: "#C1C7D0",
  borderInputFocus: "#4c9aff",
};

export const issuePriorityColors = {
  [Priority.Low]: color.success,
  [Priority.Medium]: color.warning,
  [Priority.High]: color.danger,
};

// All units are in pixels
export const sizes = {
  navWidth: 60,
  navHoverWidth: 200,
  sidebarWidth: 255,
};

export const zIndexes = {
  nav: 100,
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: 500;',
  bold: 'font-family: "CircularStdBold"; font-weight: 700;',
  black: 'font-family: "CircularStdBlack"; font-weight: 900;',
  // size: (size: number) => `font-size: ${size}px;`,
};

export const fontSizes = {
  lg: "1.2rem",
  md: "1rem",
  sm: "0.8rem",
};
