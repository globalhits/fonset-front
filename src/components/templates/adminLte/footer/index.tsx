import React from 'react';
/* import { Container, Row, Col } from 'react-bootstrap'; */
import './footer.scss'

export default function Footer() {
	return (
		<footer className="main-footer">
			<strong className='mr-2'>
				Copyright © 2023 <a href="https://fiscalia.gov.co">Fiscalia</a>.
			</strong>
			All rights reserved.
			<div className="float-right d-none d-sm-inline-block">
				<b>Version</b> 1.0.0
			</div>
		</footer>
	);
};
