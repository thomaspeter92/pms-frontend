import React, { ForwardRefRenderFunction } from "react";
import { Container, StyledInput, StyledLabel } from "./Styles";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const TextInput: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, id, ...inputProps },
  ref
) => {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput ref={ref} {...inputProps} />
    </Container>
  );
};

const ForwardedTextInput = React.forwardRef(TextInput);
export default ForwardedTextInput;
