import { FunctionComponent } from "react";
import { comlang, other } from "../../Data/SkillData";

import SkillCard from "../Common/SkillCard";

const OtherCard: FunctionComponent = () => {
  return (
    <div>
      {other.map((data) => (
        <SkillCard skills={data.skills} progress={data.progress} />
      ))}
    </div>
  );
};

export default OtherCard;
