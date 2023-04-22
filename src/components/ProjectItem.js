function ProjectItem({ project, technologies }) {
  return (
    <div key={project?.id}>
      {project ? (
        <>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h3>Technologies:</h3>
          <div>
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </>
      ) : (
        <p>Project data is not available.</p>
      )}
    </div>
  );
}
