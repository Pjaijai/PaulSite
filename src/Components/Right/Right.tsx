import React, { FunctionComponent, ReactComponentElement } from "react";

import Education from "./Education";
import Project from "./Project";
import Upper from "./Upper";
import Work from "./Work";
import { FiMoreVertical } from "react-icons/fi";

interface IRight {
  handleOpen: () => void;
}

const Right: FunctionComponent<IRight> = ({ handleOpen }) => {
  return (
    <div className="w-full lg:w-4/5 p-2 border-black h-full overflow-y-auto z-0">
      <button
        className=" top-24 left-0 text-lg border-2 text-2xl py-2 px-1 rounded-r-full lg:hidden absolute"
        onClick={handleOpen}
      >
        <FiMoreVertical />
      </button>
      <Upper />
      <Work />
      <Project />
      <Education />
    </div>
  );
};

export default Right;
