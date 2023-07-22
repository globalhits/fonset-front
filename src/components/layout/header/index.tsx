import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header(){
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Aquí puedes agregar enlaces de navegación o elementos del menú */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
