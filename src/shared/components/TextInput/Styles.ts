import styled from "styled-components";
import { color } from "../../util/styles";

export const Container = styled.div``;

export const StyledInput = styled.input`
  padding: 0.5rem 0.5rem;
  border: 1.5px solid ${color.grayMed};
  border-radius: 5px;
  width: 100%;

  &:focus {
    border-color: ${color.primary};
    box-shadow: 0 0 5px ${color.primary};
  }
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  color: ${color.grayDark};
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  display: block;
`;
