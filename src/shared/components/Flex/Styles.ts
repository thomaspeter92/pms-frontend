import styled from "styled-components";

export const Container = styled.div<{
  $align?: string;
  $justify?: string;
  $direction?: string;
  $gap?: any;
  $width?: any;
  $flex?: any;
}>`
  display: flex;
  align-items: ${(props) => props.$align};
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$justify};
  gap: ${(props) => props.$gap};
  width: ${(props) => props.$width};
  flex: ${(props) => props.$flex};
`;
