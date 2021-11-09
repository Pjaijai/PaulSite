import React, { FunctionComponent } from "react";

const Icon: FunctionComponent = () => {
  return (
    <div className="flex justify-center bg-two  ">
      <img
        src={require("../../Images/Icon.png").default}
        className="w-36 h-48 m-2 rounded-2xl"
      />
    </div>
  );
};

export default Icon;
