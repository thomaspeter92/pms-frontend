import styled from "styled-components";
import { color } from "../../../shared/util/styles";

export const BoardOuter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  height: 100%;
  min-width: 800px;
  overflow-x: auto;
`;

export const Column = styled.div<{ $active: boolean }>`
  padding: 01rem;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$active ? color.grayMed : color.grayFaint};
`;

export const ColumnTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${color.grayDark};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;
