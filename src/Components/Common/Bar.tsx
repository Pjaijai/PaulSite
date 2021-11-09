import React, { FunctionComponent, useEffect, useState } from "react";
import { IProgress, ISkills } from "../../types";

const Bar: FunctionComponent<ISkills> = ({ progress }) => {
  const [color, setColor] = useState("bg-two");

  useEffect(() => {
    if (progress > 80) {
    } else if (progress > 60 && progress <= 80) {
      setColor("bg-six");
    } else {
      setColor("bg-seven");
    }
  }, []);

  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-2 text-xs flex rounded ">
        <div
          style={{ width: `${progress}%` }}
          className={`
        shadow-none
        flex flex-col
        text-center
        whitespace-nowrap
        text-white
        justify-center
        
        ${color}
      `}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
