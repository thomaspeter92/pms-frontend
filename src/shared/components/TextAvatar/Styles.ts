import styled from "styled-components";
import { StyledText } from "../Text/Styles";
import { color } from "../../util/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  background-color: ${color.grayMed};

  ${StyledText} {
    text-transform: uppercase;
    font-weight: 700;
  }
`;
