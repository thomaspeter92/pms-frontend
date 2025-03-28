import React from "react";
import { Icons } from "../Icons";
import { color } from "../../util/styles";

type Props = {};

const TaskIcon = (props: Props) => {
  const CheckIcon = Icons["check"];
  return (
    <CheckIcon
      style={{
        borderRadius: 2,
        backgroundColor: color.primary,
        color: "white",
      }}
      strokeWidth={2.5}
      size={15}
    />
  );
};

export default TaskIcon;
