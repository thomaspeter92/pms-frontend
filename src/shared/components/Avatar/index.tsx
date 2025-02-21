import React from "react";
import { Container, Image } from "./Styles";

type Props = {
  size: "sm" | "md" | "lg";
  imgUrl: string;
};

const Avatar = ({ size, imgUrl }: Props) => {
  return (
    <Container size={size}>
      <Image src={imgUrl} alt="Avatar image" />
    </Container>
  );
};

export default Avatar;
