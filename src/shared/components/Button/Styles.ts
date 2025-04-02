import { Link } from "react-router";
import styled, { css } from "styled-components";
import { color } from "../../util/styles";

type ButtonProps = {
  variant: "gray" | "primary";
};

export const buttonBaseStyles = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.variant === "gray" ? color.grayMed : color.primary};
  font-weight: 500;
  color: white;
  cursor: pointer;
  box-sizing: border-box;

  &:focus {
    box-shadow: 0cap 0px 5px ${color.primary};
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonBaseStyles}
`;

export const StyledLink = styled(Link)<ButtonProps>`
  ${buttonBaseStyles}
`;
