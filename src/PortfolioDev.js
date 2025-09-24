import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function PortfolioDev() {
  const projects = [
    { title: "App del Clima", img: "https://via.placeholder.com/300" },
    { title: "Diccionario React", img: "https://via.placeholder.com/300" },
    { title: "Portafolio Web", img: "https://via.placeholder.com/300" },
  ];

  return (
    <section id="portfoliodev" className="py-5">
      <Container>
        <h2 className="fw-bold text-center mb-5">Portafolio Desarrollo Web</h2>
        <Row>
          {projects.map((p, i) => (
            <Col md={4} className="mb-4" key={i}>
              <Card className="shadow h-100">
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Button variant="primary" href="#">
                    Ver repositorio
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
