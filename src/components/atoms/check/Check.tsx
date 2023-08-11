import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';

interface CheckProps {
	label: string;
	name?: string;
	type: FormCheckType;
	className?: string;
	value: string;
	setValueChange: Function;
	checked?: boolean;
}

export default function CheckBox({ label, name, type, className, value, setValueChange, checked }: CheckProps) {

	return (
		<Form>
			<div className="mb-3">
				<Form.Check type={type} name={name} label={label} className={className} value={value} onChange={(e) => { setValueChange(e) }} checked={checked} />
			</div>
		</Form>
	);
}
