import React from "react";
import ProjectDetail from "./ProjectDetail";
import data from "../data/data.json";
const Projects = () => {
  const projects = data.projects;
  console.log(projects);
  return (
    <div className="projects">
      {projects.map((proj) => {
        return (
          <ProjectDetail
            key={proj.id}
            title={proj.title}
            source={proj.src}
            address={proj.url}
          />
        );
      })}
    </div>
  );
};

export default Projects;
