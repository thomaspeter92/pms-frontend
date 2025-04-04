import styled from "styled-components";
import { Container as Input } from "../../../../shared/components/TextInput/Styles";
import { color } from "../../../../shared/util/styles";

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
  border-top: 2px solid ${color.grayMed};
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
