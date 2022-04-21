import { Container } from "./styles";
import { NavHashLink } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋,It's</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 500}>
          <h1>Ahmed Afify</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 500}>
          <h3>MERN Stack Web Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 500}>
          <p className="small-resume">
            I'm a Web Developer with a focus on Using JavaScript & It's
            Frameworks.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 500}>
          <NavHashLink smooth to="#contact" className="button">
            Contact Me
          </NavHashLink>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={500}>
          <img src="assets/illustration.svg" alt="illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
