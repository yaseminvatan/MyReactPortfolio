import React from 'react';

function Project({ title, image, appLink, repoLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} preview`} />
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;
