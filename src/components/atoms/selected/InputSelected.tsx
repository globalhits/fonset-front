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
}

export default function InputSelected({ label, name, className, options, value }: InputSelectedProps) {
    return (
        <FloatingLabel label={label} className='InputSelected'>
            <Form.Select name={name} aria-label="Floating label select example" value={value}>
                {
                    options?.map((option) => (<option key={option.id} value={option.id}>{option.text}</option>)
                    )
                }
            </Form.Select>
        </FloatingLabel>
    )
}