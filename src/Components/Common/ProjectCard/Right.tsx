import React, { FunctionComponent } from "react";
import Back from "./Back";
import Front from "./Front";

const Right: FunctionComponent = ({ children }) => {
  return <div className="w-full h-full mr-0 ">{children}</div>;
};

export default Right;
