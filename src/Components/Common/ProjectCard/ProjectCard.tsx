import React, { FunctionComponent, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from "../Card/Card";
import Back from "./Back";
import Front from "./Front";
import Left from "./Left";
import Right from "./Right";

import { AiOutlineArrowDown } from "react-icons/ai";
import { IProject } from "../../../types";

const ProjectCard: FunctionComponent<IProject> = ({
  demo,
  title,
  description,
  tech,
  link,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Card>
      <div className="flex flex-row h-full relative">
        <ReactCardFlip
          containerStyle={{ width: "60%", height: "100%" }}
          isFlipped={isFlipped}
          flipDirection="vertical"
        >
          <Front title={title} description={description} />
          <Back tech={tech} />
        </ReactCardFlip>
        <Left demo={demo} link={link} />

        <button
          className="absolute bottom-1 left-1 p-2 bg-three rounded-full animate-bounce "
          onClick={handleClick}
        >
          <AiOutlineArrowDown />
        </button>
      </div>
    </Card>
  );
};

export default ProjectCard;
