import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainphoto from "./images/My-photo.png";

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={mainphoto}
              alt="Yadira"
              className="img-size img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">Sobre mí</h2>
            <p>
              Soy animadora 3D con experiencia en Maya y Blender, y
              desarrolladora web junior enfocada en React y Bootstrap. Mi meta
              es unir arte y tecnología para crear experiencias únicas.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
