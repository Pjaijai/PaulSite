import React, { FunctionComponent } from "react";

const Description: FunctionComponent = ({ children }) => {
  return <div className="p-2 mt-5 flex text-center ">{children}</div>;
};

export default Description;
