import { FunctionComponent } from "react";
import { comlang } from "../../Data/SkillData";

import SkillCard from "../Common/SkillCard";

const ComLanCard: FunctionComponent = () => {
  return (
    <div>
      {comlang.map((data) => (
        <SkillCard skills={data.skills} progress={data.progress} />
      ))}
    </div>
  );
};

export default ComLanCard;
