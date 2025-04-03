import styled from "styled-components";
import { color } from "../../util/styles";

export const Container = styled.div`
  width: 100%;
  position: relative;
  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;
    color: #000;
    font-size: 0.8rem;
    color: ${color.grayDark};
  }
`;

export const StyledSelect = styled.select`
  padding: 0.5rem 1.5rem 0.5rem 0.8rem;
  background-color: ${color.grayFaint};
  border: 1px solid ${color.grayMed};
  appearance: none;
  position: relative;
  border-radius: 5px;
  color: ${color.grayDark};
  width: 100%;
  &:focus {
    border-color: ${color.primary};
    box-shadow: 0 0 5px ${color.primary};
  }
`;
