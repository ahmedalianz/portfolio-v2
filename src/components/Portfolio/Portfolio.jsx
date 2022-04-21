import "./styles.scss";

import RubberBand from "react-reveal/RubberBand";
import ScrollAnimation from "react-animate-on-scroll";
import { useNavigate } from "react-router-dom";

export function Portfolio({ projects }) {
  const featuredProjects = projects.slice(0, 3);
  const navigate = useNavigate();
  const visitProjects = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };
  const visitSingleProject = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="portfolio-container" id="projects">
      <h2>My Projects</h2>

      <div className="projects">
        {featuredProjects.map((project, i) => (
          <ScrollAnimation animateIn="flipInX" key={i}>
            <div
              className="project"
              onClick={() => visitSingleProject(project.link)}
            >
              <header>
                <img className="project-logo" src={project.logo} alt="" />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src="assets/github-icon.svg" alt="GitHub" />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src="assets/external-link-icon.svg" alt="link" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.name}</h3>
                <div className="img-container">
                  <img src={project.image} alt="" />
                </div>
                <p>{project.desc.substring(0, 85) + "..."}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techs.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      <div className="more-button-box">
        <RubberBand>
          <div onClick={visitProjects} className="more-button">
            See More
          </div>
        </RubberBand>
      </div>
    </div>
  );
}
