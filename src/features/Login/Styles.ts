import styled from "styled-components";
import { color } from "../../shared/util/styles";

export const Container = styled.div`
  background-color: ${color.grayFaint};
  min-height: 100dvh;
  display: grid;
  place-items: center;
`;

export const LoginForm = styled.form`
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  /* border: 1px solid gray; */
  max-width: 500px;
  /* margin: auto; */

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
