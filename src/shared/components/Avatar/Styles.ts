import styled from "styled-components";

export const Container = styled("div")<{ size: "sm" | "md" | "lg" }>`
  width: ${({ size }) =>
    size === "sm" ? "1rem" : size === "md" ? "2rem" : "3rem"};
  height: ${({ size }) =>
    size === "sm" ? "1rem" : size === "md" ? "2rem" : "3rem"};
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
