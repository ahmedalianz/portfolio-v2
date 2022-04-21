import { Container } from "./styles";
import Experience from "components/Experience/Experience";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  const skills = [
    { name: "HTML", image: "/assets/html.webp" },
    { name: "CSS", image: "/assets/css.webp" },
    { name: "JavaScript", image: "/assets/js.webp" },
    { name: "TypeScript", image: "/assets/ts.png" },
    { name: "SCSS", image: "/assets/scss.png" },
    { name: "React", image: "/assets/react.webp" },
    { name: "Redux Toolkit", image: "/assets/redux.webp" },
    { name: "Material UI", image: "/assets/material.webp" },
    { name: "Core UI", image: "/assets/coreui.png" },
    { name: "Bootstrap", image: "/assets/bootstrap.png" },
    { name: "Git", image: "/assets/git.webp" },
    { name: "Node Js", image: "/assets/node.webp" },
    { name: "Express Js", image: "/assets/express.png" },
    { name: "Mongo DB", image: "/assets/mongo.png" },
    { name: "Angular", image: "/assets/angular.webp" },
    { name: "Angular Material", image: "/assets/angmat.png" },
    { name: "Next Js", image: "/assets/next.webp" },
  ];

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p style={{ lineHeight: "3rem" }}>
            I am a MERN stack developer with a passion for creating beautiful
            and intuitive user interfaces. I have a background in web
            development. I am currently working as a Front End Developer at{" "}
            <a
              href="https://websquids.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Websquids LLC
            </a>
            .
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p style={{ marginTop: "20px", lineHeight: "3rem" }}>
            I am a self-taught developer with a passion for learning new
            technologies and building web applications. I am currently
            Strengthening My Knowledge about{" "}
            <a
              href="https://angular.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angular{" "}
            </a>
            &{" "}
            <a
              href="https://material.angular.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angular Material.
            </a>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <Experience />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <h2>Skills</h2>
          <div className="hard-skills">
            {skills.map((skill, index) => (
              <div className="hability" key={index}>
                <img src={skill.image} alt={skill.name} />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src="assets/profile.jpg" alt="it's Me" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
