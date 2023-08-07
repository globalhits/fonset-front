import React from 'react';
import Button from 'react-bootstrap/Button';

interface BottonsProps {
	variant: string;
	label: string;
	classStyle?: string;
}

export default function Buttons({ variant, label, classStyle }: BottonsProps) {
	return (
		<>
			<Button variant={variant} className={classStyle}> {label} </Button>
		</>
	);
}