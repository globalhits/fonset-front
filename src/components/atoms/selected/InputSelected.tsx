import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './InputSelected.scss'

interface InputSelectedProps {
    label: string;
    name?: string;
    className?: string;
    options?: any[];
    value?: any;
    onChange: Function;
    disabled?: boolean;
    isInvalid?: boolean;
}

export default function InputSelected({ label, name, className, options, value, onChange, disabled, isInvalid }: InputSelectedProps) {
    return (
        <FloatingLabel label={label} className='InputSelected'>
            <Form.Select name={name} aria-label="Floating label select example" value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} isInvalid={isInvalid}>
                <option value={""}>Seleccionar...</option>
                {
                    options && Array.isArray(options) && options?.map((option, i) => (
                        <option key={i} value={option.id || option.ID}>
                            {
                                option.name ? option.name : (option.NAME ? option.NAME : (option.descripcion ? option.descripcion : (option.DESCRIPCION ? option.DESCRIPCION : option.description)))
                            }
                        </option>)
                    )
                }
            </Form.Select>
            <Form.Control.Feedback type="invalid">{label} es requerid@.</Form.Control.Feedback>
        </FloatingLabel>
    )
}