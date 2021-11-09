import React, { FunctionComponent } from "react";
import { ISkills } from "../../types";
import Bar from "./Bar";

const SkillCard: FunctionComponent<ISkills> = ({ skills, progress }) => {
  return (
    <div className="my-2">
      <h3 className="font-semibold text-one">{skills}</h3>

      <Bar progress={progress} />
    </div>
  );
};

export default SkillCard;
