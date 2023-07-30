import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './header/index';
import Footer from './footer/index'
import Sidebar from './sidebar/index';


interface LayoutInterface {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
	return (
		<div>
			<Header />
			<Container fluid>
				<Row>
					<Col md={2} className="d-none d-md-block">
						<Sidebar />
					</Col>
					<Col md={10}>
						<main>{children}</main>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Layout;
