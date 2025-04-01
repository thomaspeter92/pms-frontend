import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);

  & > *:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;
