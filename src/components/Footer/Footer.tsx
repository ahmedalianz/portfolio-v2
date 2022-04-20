import { Container } from "./styles";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Ahmed </span>
        <span>Afify</span>
      </a>
      <div>
        <p>
          Made Using React <img src="assets/react-icon.svg" alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ahmedAfify/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/linkedin.png" alt="Linkedin" />
        </a>

        <a
          href="https://github.com/ahmedAfifyz"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/github.png" alt="GitHub" />
        </a>

        <a
          href="https://www.facebook.com/ahmed.tiger.300/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/facebook.png" alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
