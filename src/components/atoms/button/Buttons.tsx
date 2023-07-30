import React from 'react';
import Button from 'react-bootstrap/Button';

interface BottonsProps {
	variant: string;
	label: string;
}

export default function Buttons({ variant, label }: BottonsProps) {
	return (
		<>
			<Button variant={variant}> {label} </Button>
		</>
	);
}