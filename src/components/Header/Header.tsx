import { HashLink, NavHashLink } from "react-router-hash-link";

import { Container } from "./styles";
import { useState } from "react";

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="/#home" className="logo">
        <span>Ahmed</span>
        <span>Afify</span>
      </HashLink>

      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      <nav className={isActive ? "active" : ""}>
        <NavHashLink smooth to="/#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="/#about" onClick={closeMenu}>
          About Me
        </NavHashLink>
        <NavHashLink smooth to="/#projects" onClick={closeMenu}>
          Projects
        </NavHashLink>
        <NavHashLink smooth to="/#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href="assets/cv.pdf" download className="button">
          CV
        </a>
      </nav>

      <div
        aria-expanded={isActive ? "true" : "false"}
        aria-haspopup="true"
        aria-label={isActive ? "Fechar menu" : "Abrir menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
}
