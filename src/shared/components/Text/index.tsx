import React from "react";
import { StyledText } from "./Styles";
import { fontSizes } from "../../util/styles";

type Props = {
  children: React.ReactNode;
  as?: string;
  variant?: keyof typeof fontSizes;
};

const Text = ({ children, as, variant = "md" }: Props) => {
  return (
    <StyledText variant={variant} as={as}>
      {children}
    </StyledText>
  );
};

export default Text;
