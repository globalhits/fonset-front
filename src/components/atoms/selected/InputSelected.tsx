import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './InputSelected.scss'

interface InputSelectedProps {
    label: string;
    name?: string;
    className?: string;
    options?: any[];
    value?: string;
    onChange: Function;
    disabled?: boolean;
}

export default function InputSelected({ label, name, className, options, value, onChange, disabled }: InputSelectedProps) {
    return (
        <FloatingLabel label={label} className='InputSelected'>
            <Form.Select name={name} aria-label="Floating label select example" value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}>
                <option value={""}>Seleccionar...</option>
                {
                    options?.map((option, i) => (<option key={i} value={option.id}>{option.description}</option>)
                    )
                }
            </Form.Select>
        </FloatingLabel>
    )
}