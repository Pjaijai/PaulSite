import React, { FunctionComponent } from "react";
import Badge from "../Badge/Badge";
import Right from "./Right";

interface IBack {
  tech: string[];
}
const Back: FunctionComponent<IBack> = ({ tech }) => {
  return (
    <Right>
      <div className="flex flex-row  p-2 flex-wrap h-full w-full  ">
        {tech.map((data) => (
          <Badge title={data} />
        ))}
      </div>
    </Right>
  );
};

export default Back;
