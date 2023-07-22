import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light mt-4">
      <Container>
        <Row>
          <Col className="text-center py-3">
            {/* Aquí puedes agregar información de contacto, derechos de autor, etc. */}
            &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
