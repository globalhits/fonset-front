import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Container className="sidebar">
      <Nav defaultActiveKey="/" className="flex-column">
        {/* Aquí puedes agregar los enlaces o elementos del menú para el Sidebar */}
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/about">Acerca de</Nav.Link>
        <Nav.Link href="/contact">Contacto</Nav.Link>
      </Nav>
    </Container>
  );
};

export default Sidebar;
