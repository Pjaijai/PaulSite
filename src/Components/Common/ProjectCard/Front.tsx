import React, { FunctionComponent } from "react";
import { IProject } from "../../../types";
import Description from "../Description";
import Right from "./Right";

interface IFront {
  title: string;
  description: string;
}

const Front: FunctionComponent<IFront> = ({ title, description }) => {
  return (
    <Right>
      <div className="flex justify-center flex-col ">
        <div className="h-1/6 border-b-2 w-4/5 ml-1 text-2xl font-black text-one text-center ">
          {title}
        </div>
        <Description>{description}</Description>
      </div>
    </Right>
  );
};

export default Front;
