import styled from "styled-components";
import { color } from "../../../shared/util/styles";

export const Header = styled.div`
  margin-bottom: 1.5rem;
  & > * {
    margin-bottom: 0.5rem;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AvatarList = styled.div`
  display: flex;

  & > *:not(:first-child) {
    margin-left: -10px;
    border: 1px solid white;
  }
`;

export const BoardOuter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  height: 100%;
`;

export const Column = styled.div`
  padding: 01rem;
  background-color: ${color.grayFaint};
  border-radius: 5px;
`;

export const ColumnTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${color.grayDark};
  text-transform: uppercase;
  letter-spacing: 1px;
`;
