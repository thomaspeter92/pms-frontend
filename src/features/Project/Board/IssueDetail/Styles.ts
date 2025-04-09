import styled from "styled-components";
import { Container as Input } from "../../../../shared/components/TextInput/Styles";
import { color } from "../../../../shared/util/styles";
import { CommentContainer } from "./Comment/Styles";

export const Container = styled.div`
  width: 50ch;
  max-width: 100%;
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  ${Input} {
    flex: 1;
  }
`;

export const CommentArea = styled.div`
  width: 100%;
  margin-top: 1rem;
  border-top: 1.5px solid ${color.grayLight};

  ${CommentContainer}:not(:last-child) {
    border-bottom: 1px solid ${color.grayLight};
  }
`;
