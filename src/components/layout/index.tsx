import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './header/index';
import Footer from './footer/index'
import Sidebar from './sidebar/index';


/* interface LayoutInterface {
         children?: React.ReactNode;
     } */

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col md={3} className="d-none d-md-block">
            {/* Aquí se incluye el Sidebar */}
            <Sidebar />
          </Col>
          <Col md={9}>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
