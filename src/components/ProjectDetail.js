import React from "react";
const ProjectDetail = ({ title, source, address }) => {
  // const projectName = "Porfolio";
  console.log(source);

  return (
    <div className="project-detail">
      {/* <div
        className="project-snap"
        style={{ backgroundImage: `url(${source})` }}
      ></div> */}
      <img src={`${source}`} alt="" className="project-snap" />
      <h3>{title}</h3>
      <span>
        <a href={address} target="_blank" rel="noreferrer">
          View
        </a>
      </span>
    </div>
  );
};

export default ProjectDetail;
