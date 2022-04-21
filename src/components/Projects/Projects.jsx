import "./projects.scss";

import Project from "./Project";

export default function Projects({ projects }) {
  return (
    <div className="all-projects-container">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
      <h1 style={{ textAlign: "center" }}>That's ,All Thank You.</h1>
    </div>
  );
}
