import React from 'react';
import "./loader.scss";

const Loader = () => {
	return (
		<div className='loader flex flex-c'>
			<img src={"/assets/images/loader.svg"} alt="loader" />
		</div>
	)
}

export default Loader