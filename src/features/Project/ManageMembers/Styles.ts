import styled from "styled-components";
import { color } from "../../../shared/util/styles";
import { StyledText } from "../../../shared/components/Text/Styles";

export const MemberCard = styled.div`
  background-color: ${color.grayFaint};
  border: 1px solid ${color.grayLight};
  border-radius: 5px;
  padding: 8px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${StyledText} {
    flex: 1;
  }
`;

export const RemoveButton = styled.button`
  border-radius: 50%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${color.grayLight};
  }
`;
