import { Container } from "./styles";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Leave Me A Message Here </h2>
      </header>
      <div className="contacts">
        <div>
          <img src="assets/email-icon.svg" alt="Email" />
          <a href="mailto:ahmedalian400@gmail.com">ahmedalian400@gmail.com</a>
        </div>
        <div>
          <img src="assets/phone-icon.svg" alt="phone" />
          <a href="tel:+201099019685">(+2) 01066019685</a>
        </div>
      </div>
      <Form />
    </Container>
  );
}
