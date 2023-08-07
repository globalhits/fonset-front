import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './InputSelected.scss'

interface InputSelectedProps {
    label: string;
    className?: string;
    options?: any[]
}

export default function InputSelected({ label, className, options }: InputSelectedProps) {
    return (
        <FloatingLabel label={label} className='InputSelected'>
            <Form.Select aria-label="Floating label select example">
                {
                    options?.map((option) => (<option key={option.id} value={option.id}>{option.text}</option>)
                    )
                }
            </Form.Select>
        </FloatingLabel>
    )
}