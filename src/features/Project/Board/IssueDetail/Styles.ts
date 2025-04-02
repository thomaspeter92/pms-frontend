import styled from "styled-components";

export const Container = styled.div`
  width: 65ch;
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
`;
