import { Container, ContainerSucces } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import validator from "validator";

export function Form() {
  const [succeeded, setSuccess] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (succeeded) {
      toast.success("Email sent Successfully!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  });
  if (succeeded) {
    return (
      <ContainerSucces>
        <h3>Happy to get in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Scroll To Top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }
  const sendMessage = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c6yrwva",
        "template_pzqj5hb",
        e.target,
        "BnY6F9lc5yB6lhJoP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Your message has been sent. Thank you!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <form onSubmit={sendMessage}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <textarea
          required
          placeholder="Message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <ReCAPTCHA
          sitekey="6LcAu-IdAAAAAJOTI5E_eRltZNQCvukIl2-f1glQ"
          onChange={(e) => {
            setIsHuman(true);
          }}
        ></ReCAPTCHA>
        <button type="submit" disabled={!validEmail || !message || !isHuman}>
          Send
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
