import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';

interface CheckProps {
	id?: string;
	label: string;
	name?: string;
	type: FormCheckType;
	className?: string;
	value: string;
	setValueChange: Function;
	checked?: boolean;
}

export default function CheckBox({ label, id, name, type, className, value, setValueChange, checked }: CheckProps) {

	return (
		<Form>
			<div className="mb-3">
				<Form.Check type={type} id={id} name={name} label={label} className={className} value={value} onChange={(e) => { setValueChange(e) }} checked={checked} />
			</div>
		</Form>
	);
}
