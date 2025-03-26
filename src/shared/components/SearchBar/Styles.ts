import styled from "styled-components";
import { color } from "../../util/styles";

export const Container = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    color: ${color.grayDark};
  }
`;

export const Input = styled.input`
  border: 2px solid ${color.grayMed};
  background-color: ${color.grayFaint};
  border-radius: 5px;
  padding: 0.5rem;
  padding-right: 2rem;
`;
