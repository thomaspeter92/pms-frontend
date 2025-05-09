import React, { ForwardRefRenderFunction } from "react";
import { Container, StyledInput, StyledLabel } from "./Styles";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

const TextInput: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, id, error, ...inputProps },
  ref
) => {
  console.log(error);
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput $error={error} ref={ref} {...inputProps} />
    </Container>
  );
};

const ForwardedTextInput = React.forwardRef(TextInput);
export default ForwardedTextInput;
