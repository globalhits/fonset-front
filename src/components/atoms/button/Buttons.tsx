import React from 'react';
import Button from 'react-bootstrap/Button';

interface BottonsProps {
	variant: string;
	href?: string;
	target?: string;
	label?: string;
	classStyle?: string;
	icon?: string;
	onClick: Function;
	size?: string;
}

export default function Buttons({ href, target, variant, label, classStyle, icon, onClick }: BottonsProps) {

	return (
		<>
			<Button href={href} target={target} variant={variant} className={classStyle} onClick={() => onClick()}>
				{icon !== "" ? (<i className={'bi bi-' + icon + ' pl-1 pr-1'}></i>) : null}
				{label}
			</Button>
		</>
	);
}