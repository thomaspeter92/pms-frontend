import styled from "styled-components";
import { color } from "../../util/styles";

export const Container = styled.div``;

export const StyledInput = styled.input<{ $error?: Boolean }>`
  padding: 0.5rem 0.5rem;
  border: 1.5px solid
    ${(props) => (props.$error ? color.danger : color.grayMed)};
  border-radius: 5px;
  width: 100%;
  background-color: ${(props) =>
    props.type === "date" ? color.grayFaint : "white"};
  color: ${color.grayDark};

  &:focus {
    border-color: ${(props) => (props.$error ? color.danger : color.primary)};
    box-shadow: 0 0 5px
      ${(props) => (props.$error ? color.danger : color.primary)};
  }
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  color: ${color.grayDark};
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  display: block;
`;
