import React from 'react';
import Project from '../components/Project'; // Importing the reusable Project component

function Portfolio() {
  // Array of project objects containing details for each project
  const projects = [
    {
      title: 'Digitex', 
      image: 'project1.png', 
      repoLink: 'https://github.com/UCBX-2024-Team-Wombat/P2-Digidex', 
    },
    {
      title: 'WordNerd',
      image: 'project2.png', 
      repoLink: 'https://github.com/UCBX-2024-Team-Wombat/WordNerd', 
    },
    // Add 3rd project here, may be appLink for a live demo
    // {
    //   title: 'Project Name',
    //   image: 'project3.png',
    //   appLink: 'https://project-demo-link.com',
    //   repoLink: 'https://github.com/repo-link',
    // },
  ];

  return (
    <section className="section">
      <h2>Portfolio</h2>
      {/* Rendering a list of projects using the Project component (dynamic rendering)*/}
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />  //note for myself key prop ensures that each rendered project is uniquely identifiable, which is important for React's reconciliation process.
          // Spreading project properties to pass them as props to the Project component
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
