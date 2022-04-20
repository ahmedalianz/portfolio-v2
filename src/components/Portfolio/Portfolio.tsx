import "./styles.scss";

import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Netflix Clone",
      image: "/assets/projects/netflix/1.png",
      link: "https://netflex-nine.vercel.app/",
      logo: "/assets/projects/netflix/netflixlogo.png",
      github: "https://github.com/ahmedalianz/netflix-Clone",
      filter: ["React", "SCSS"],
      desc: "This Application Fetches the Popular Movies and Tv Shows From TMDB ,It's The Same Design Style As The Real Netflix , Manually Customized Components like Accordion & Floating Input Without any external Library , It Supports Two Languages (English & Arabic), It's Also Very responsive Design",
    },
    {
      id: 2,
      name: "Sprout Social",
      image: "/assets/projects/sprout/1.png",
      link: "https://sprout-social.vercel.app/",
      logo: "/assets/projects/sprout/sproutlogo.png",
      github: "https://github.com/ahmedalianz/social-React-Redux-MogoDb",
      filter: ["React", "Redux", "Node", "Express", "MongoDB"],
      desc: "In This Application You Can Sign up or login to your account , You can create a post , like it , comment on it ,search for people,view & Edit Your Profile , and more , It's also very responsive Design",
    },
    {
      id: 3,
      name: "Electronics Store",
      image: "/assets/projects/store/1.png",
      link: "https://electronicz-store.vercel.app/",
      logo: "/assets/projects/store/storelogo.png",
      github: "https://github.com/ahmedalianz/E-commerce-react-redux",
      filter: ["React", "Redux", "Node", "Express", "MongoDB"],
      desc: "In This Application You Can view all the products , add to cart , checkout , and more ,it Supports Arabic Language, It's also very responsive Design",
    },
  ];
  const visitPortfolio = () => {
    window.location.href = "https://ahmedalian.vercel.app/projects";
  };
  const visitProject = (i: any) => {
    window.location.href = `https://ahmedalian.vercel.app/projects/${i + 1}`;
  };
  return (
    <div className="portfolio-container" id="projects">
      <h2>My Projects</h2>

      <div className="projects">
        {projects.map((project: any, i: number) => (
          <ScrollAnimation animateIn="flipInX" key={i}>
            <div className="project" onClick={(i) => visitProject(i)}>
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
                  {project.filter.map((tech: any) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      <div className="more-button-box">
        <div onClick={visitPortfolio} className="more-button">
          See More
        </div>
      </div>
    </div>
  );
}
