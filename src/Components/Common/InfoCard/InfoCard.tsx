import React, { Children, FunctionComponent } from "react";
import { IInfo } from "../../../types";
import Card from "../Card/Card";
import Description from "../Description";

const InfoCard: FunctionComponent<IInfo> = ({
  description,
  end,
  org,
  start,
  title,
}) => {
  return (
    <Card>
      <div className="h-2/6 bg-three">
        <div className="p-1">
          <h2 className="flex text-one text-sm md:text-xl justify-center font-black">
            {title}
          </h2>
          <div className="flex justify-between text-xs mt-2 text-one font-bold md:text-base">
            <h3>{org}</h3>
            <h2 className="text-one font-bold">
              {start} - {end}
            </h2>
          </div>
        </div>
      </div>
      <Description>{description}</Description>
    </Card>
  );
};

export default InfoCard;
