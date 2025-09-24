import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-center bg-light vh-100"
    >
      <Container>
        <h1 className="display-4 fw-bold">
          I´m Yadira — <span className="text-success">Mex</span>i
          <span className="text-danger">can</span> 3D Animator & Junior Web
          Developer
        </h1>
        <p className="lead mt-3">
          <i class="bi bi-display text-success"></i> My profesional Portfolio
          about my two passions: the 3D world and computing{" "}
          <i class="bi bi-display text-danger"></i>
        </p>
        <Button href="#about" variant="dark border " size="lg" className="mt-4">
          About me
        </Button>
      </Container>
    </section>
  );
}
