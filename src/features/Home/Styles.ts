import styled from "styled-components";
import { color } from "../../shared/util/styles";

export const Container = styled.div`
  padding: 1rem;
  background-color: ${color.grayFaint};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
