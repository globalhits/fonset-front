import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function NavForms() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/invertion">INFORMACION BASICA</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/invertion/proyecto">PROYECTO</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="invertion/general">OBJ. GENERAL</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="invertion/especifico" >OBJ. ESPECIFICO</Nav.Link>
  </Nav.Item>
</Nav>
  );
}