import React, { FunctionComponent, useEffect, useState } from "react";

interface IBadge {
  title: string;
}
const Badge: FunctionComponent<IBadge> = ({ title }) => {
  const [color, setColor] = useState("bg-two");

  return (
    <div className={` mx-2 text-one font-semibold flex-shrink-0`}>{title}</div>
  );
};

export default Badge;
