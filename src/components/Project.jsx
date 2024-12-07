import React from 'react';
import * as projects from '../assets';


function Project({ title, image, appLink, repoLink }) {
  console.log("Assets: ", projects);
  console.log("Type: ", typeof projects);
  
  return (
    <div className="project-card">
      <img src={projects[image]} alt={`${title} preview`} />
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;
