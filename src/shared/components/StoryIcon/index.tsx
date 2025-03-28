import React from "react";
import { Icons } from "../Icons";
import { color } from "../../util/styles";

type Props = {};

const StoryIcon = (props: Props) => {
  const Icon = Icons["story"];
  return (
    <Icon
      style={{
        borderRadius: 2,
        backgroundColor: color.success,
        // color: "transparent",
        fill: "white",
      }}
      strokeWidth={0}
      size={15}
    />
  );
};

export default StoryIcon;
