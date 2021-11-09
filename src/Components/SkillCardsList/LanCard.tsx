import React, { FunctionComponent } from "react";
import { languages } from "../../Data/SkillData";
import { ISkills } from "../../types";
import SkillCard from "../Common/SkillCard";

const LanCard: FunctionComponent = () => {
  return (
    <div>
      {languages.map((data) => (
        <SkillCard skills={data.skills} progress={data.progress} />
      ))}
    </div>
  );
};

export default LanCard;
