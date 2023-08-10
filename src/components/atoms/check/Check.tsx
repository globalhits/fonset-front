import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';

interface CheckProps {
	label: string;
	type: FormCheckType;
	className?: string;
	value: string;
	setValueChange: Function;
}

export default function CheckBox({ label, type, className, value, setValueChange }: CheckProps) {

	return (
		<Form>
			<div className="mb-3">
				<Form.Check type={type} label={label} className={className} value={value} onChange={(e) => { setValueChange(e.target.value) }} />
			</div>
		</Form>
	);
}
