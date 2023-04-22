import React from 'react';

function ProjectItem({ project }) {
  return (
    <div key={project.id}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <h3>Technologies:</h3>
      <div>
        {project.technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
