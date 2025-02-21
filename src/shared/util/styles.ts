import { Priority } from "../constants/issues";

export const color = {
  primary: "#0052cc", // Blue
  success: "#0B875B", // green
  danger: "#E13C3C", // red
  warning: "#F89C1C", // orange
  secondary: "#F4F5F7", // light grey

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
  sidebarWidth: 200,
};

export const zIndexes = {
  nav: 100,
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: (size: number) => `font-size: ${size}px;`,
};

export const fontSizes = {
  lg: "1.2rem",
  md: "1rem",
  sm: "0.8rem",
};
