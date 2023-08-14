import React from 'react';
import Button from 'react-bootstrap/Button';

interface BottonsProps {
	variant: string;
	label?: string;
	classStyle?: string;
	icon?: string;
	onClick: Function;
	size?: string;
}

export default function Buttons({ variant, label, classStyle, icon, onClick }: BottonsProps) {

	return (
		<>
			<Button variant={variant} className={classStyle} onClick={() => onClick()}>
				{label}
				{icon !== "" ? (<i className={'bi bi-' + icon}></i>) : null}
			</Button>
		</>
	);
}