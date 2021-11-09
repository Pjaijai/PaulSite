import React, { FunctionComponent } from "react";
import { education } from "../../Data/Data";

import InfoCard from "../Common/InfoCard/InfoCard";
import Section from "../Common/Section/Section";

const Education: FunctionComponent = () => {
  return (
    <Section title="EDUCATION">
      {education.map((data) => (
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

export default Education;
