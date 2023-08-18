import React from 'react';
import "./loader.scss";
import { Spinner } from 'react-bootstrap';

const Loader = () => {
	return (
		<div className="loading">
			<Spinner className='size-loading' animation="border" role="status" variant="primary" size="sm">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}

export default Loader