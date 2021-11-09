import React, { Children, FunctionComponent } from "react";

const Card: FunctionComponent = ({ children }) => {
  return (
    <div className="w-72 h-48 lg:w-96 lg:h-48  border shadow-2xl rounded-lg m-2  flex-shrink-0">
      {children}
    </div>
  );
};

export default Card;
