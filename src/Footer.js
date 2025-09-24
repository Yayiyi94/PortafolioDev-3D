import React from "react";
import { Container } from "react-bootstrap";
import imageGif from "./images/Help Me Sara Sticker by Jin.gif";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} Yadira. Desarrollado con React &
          Bootstrap.
        </p>
      </Container>
      <img src={imageGif} alt="Yadira" className="img-size img-fluid" />
    </footer>
  );
}
