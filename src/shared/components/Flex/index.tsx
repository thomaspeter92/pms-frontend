import React from "react";
import { Container } from "./Styles";

type Props = {
  children: React.ReactNode;
  direction?: "column" | "row";
  align?: "center" | "flex-start" | "flex-end";
  justify?: "center" | "end" | "start" | "space-between";
  gap?: any;
  width?: any;
  flex?: any;
};

const Flex = ({
  children,
  direction = "row",
  align = "flex-start",
  justify = "start",
  gap = 0,
  width = "auto",
  flex = 1,
}: Props) => {
  return (
    <Container
      $direction={direction}
      $align={align}
      $justify={justify}
      $gap={gap}
      $width={width}
      $flex={flex}
    >
      {children}
    </Container>
  );
};

export default Flex;
