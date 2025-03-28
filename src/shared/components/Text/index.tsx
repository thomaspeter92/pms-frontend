import React from "react";
import { StyledText } from "./Styles";
import { color, fontSizes } from "../../util/styles";
import { JSX } from "react";

type Props = {
  children: React.ReactNode;
  as?: keyof Pick<
    JSX.IntrinsicElements,
    "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  variant?: keyof typeof fontSizes;
  color?: keyof typeof color;
  weight?: 900 | 700 | 600 | 500 | 400;
};

const Text = ({
  children,
  as = "p",
  variant = "md",
  weight = 400,
  color = "grayDark",
}: Props) => {
  return (
    <StyledText $variant={variant} as={as} $color={color} $weight={weight}>
      {children}
    </StyledText>
  );
};

export default Text;
