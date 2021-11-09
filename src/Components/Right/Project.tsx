import React, { FunctionComponent } from "react";
import { project } from "../../Data/Data";
import ProjectCard from "../Common/ProjectCard/ProjectCard";
import Section from "../Common/Section/Section";

const Project: FunctionComponent = () => {
  return (
    <Section title="PROJECT">
      {project.map((data) => (
        <ProjectCard
          title={data.title}
          description={data.description}
          tech={data.tech}
          demo={data.demo}
          link={data.link}
        />
      ))}
    </Section>
  );
};

export default Project;
