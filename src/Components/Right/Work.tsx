import React, { FunctionComponent } from "react";
import { work } from "../../Data/Data";
import { IInfo } from "../../types";
import InfoCard from "../Common/InfoCard/InfoCard";
import Section from "../Common/Section/Section";

const Work: FunctionComponent = () => {
  return (
    <Section title="WORK EXPERIENCE">
      {work.map((data) => (
        <InfoCard
          title={data.title}
          start={data.start}
          end={data.end}
          org={data.org}
          description={data.description}
        />
      ))}
    </Section>
  );
};

export default Work;
