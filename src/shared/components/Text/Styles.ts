import styled from "styled-components";
import { color, fontSizes } from "../../util/styles";

export const StyledText = styled("p")<{
  $variant: keyof typeof fontSizes;
  $color: keyof typeof color;
  $weight: number;
}>`
  color: ${(props) => color[props.$color]};
  font-size: ${(props) => fontSizes[props.$variant]};
  font-weight: ${(props) => `${props.$weight}`} !important;
`;
