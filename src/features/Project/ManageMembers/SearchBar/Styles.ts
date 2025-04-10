import styled from "styled-components";
import { color } from "../../../../shared/util/styles";

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

export const SearchResults = styled.div`
  padding: 0.5rem;
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${color.grayLight};
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.25);
`;

export const StyledSearchResult = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  padding: 0.3rem 0;

  &:hover {
    background-color: ${color.grayLight};
  }

  &:not(:last-child) {
    border-bottom: 1.5px solid ${color.grayLight};
  }
`;
