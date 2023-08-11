import React from 'react';
import Button from 'react-bootstrap/Button';

interface BottonsProps {
	variant: string;
	label: string;
	classStyle?: string;
	onClick: Function;
}

export default function Buttons({ variant, label, classStyle, onClick }: BottonsProps) {

	return (
		<>
			<Button variant={variant} className={classStyle} onClick={() => onClick()}> {label} </Button>
		</>
	);
}