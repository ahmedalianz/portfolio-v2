import ImageGallery from "react-image-gallery";
import ScrollAnimation from "react-animate-on-scroll";

export default function Project({ project }) {
  const projectImages = [...project.assets].map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });
  return (
    <div className="project" id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 500}>
          <h2>{project.name}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 500}>
          <p className="desc">{project.desc}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 500}>
          <h3>Used Technologies</h3>
          <div className="techs">
            {project.techs.map((tech) => (
              <span className="tech">{tech}</span>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 500}>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer">
              <span>View Code</span>
              <img src="/assets/github-icon.svg" alt="GitHub" />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <span>Visit Website</span>
              <img src="/assets/external-link-icon.svg" alt="link" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 500}>
        <div className="hero-slider">
          <ImageGallery
            items={projectImages}
            autoPlay
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
          />
        </div>
      </ScrollAnimation>
    </div>
  );
}
