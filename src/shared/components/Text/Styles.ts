import styled from "styled-components";
import { color, fontSizes } from "../../util/styles";

export const StyledText = styled("p")<{ variant: keyof typeof fontSizes }>`
  color: ${color.textDarkest};
  font-size: ${(props) => fontSizes[props.variant]};
`;
