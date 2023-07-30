import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface InputProps {
    type: string;
    placeholder: string;
    label: string;
    className: string;
}

export default function InputFloating({ type, placeholder, label, className }: InputProps) {

    return (
        <div>
            <FloatingLabel label={label} className={className}>
                <Form.Control type={type} placeholder={placeholder} />
            </FloatingLabel>
        </div>
    )
}
