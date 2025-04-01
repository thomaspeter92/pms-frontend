import styled from "styled-components";
import { color } from "../../../../shared/util/styles";

export const Card = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 6px -5px rgba(0, 0, 0, 0.25);
  cursor: grab;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
  gap: 0.5rem;
`;

export const CommentCount = styled.p`
  background-color: ${color.grayLight};
  color: ${color.grayDark};
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.7rem;
  margin-left: auto;
`;
