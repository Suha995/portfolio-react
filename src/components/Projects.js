import React from "react";
import ProjectDetail from "./ProjectDetail";
import data from "../data/data.json";
import "./projects.scss";
const Projects = () => {
  const projects = data.projects;
  console.log(projects);
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
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
    </div>
  );
};

export default Projects;
