import styled from "styled-components";

export const LoginForm = styled.form`
  padding: 1rem;
  background-color: white;
  border: 1px solid gray;
  max-width: 500px;
  margin: auto;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
