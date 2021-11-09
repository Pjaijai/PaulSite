import React, {
  FC,
  FunctionComponent,
  ReactComponentElement,
  useState,
} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import ComLanCard from "../SkillCardsList/ComLanCard";

import LanCard from "../SkillCardsList/LanCard";
import OtherCard from "../SkillCardsList/OtherCard";
import Icon from "./Icon";

interface ILeft {
  open: boolean;
  handleOpen: () => void;
}

const Left: FunctionComponent<ILeft> = ({ open, handleOpen }) => {
  return (
    <div
      className={`w-1/5 h-full  md:flex md:flex-col overflow-y-auto ${
        open ? "absolute w-4/5 z-40 bg-four" : "hidden"
      }`}
    >
      <Icon />
      <div className="px-2 py-4">
        <div className="font-bold text-lg border-b">
          Computer Languages/ IT Skills
        </div>
        <ComLanCard />

        <div className="font-bold pt-4 text-lg border-b">Languages</div>

        <LanCard />

        <div className="font-bold pt-4 text-lg border-b">Others</div>
        <OtherCard />
      </div>

      <button
        className="absolute lg:hidden top-2 right-0 text-2xl bg-two border-2 pl-2 rounded-l-lg"
        onClick={handleOpen}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Left;
