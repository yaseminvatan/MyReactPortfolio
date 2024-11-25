import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>GIS tools</li>
        {/* Add other proficiencies after bootcamp to update my portfolio */}
      </ul>
    </section>
  );
}

export default Resume;
