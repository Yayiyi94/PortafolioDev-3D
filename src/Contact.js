import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Contáctame</h2>
        <Form className="mx-auto" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Tu email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Tu mensaje" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </section>
  );
}
