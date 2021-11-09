import React, { FunctionComponent } from "react";
import { ISection } from "../../../types";

const Section: FunctionComponent<ISection> = ({ title, children }) => {
  return (
    <div className="p-2">
      <div className="font-black text-2xl text-center text-one">{title}</div>
      <div className="flex flex-row w-full p-2 overflow-x-auto overflow-y-hidden">
        {children}
      </div>
    </div>
  );
};

export default Section;
