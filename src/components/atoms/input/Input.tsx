import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface InputProps {
    id?: string;
    name?: string;
    value?: any;
    type: string;
    placeholder?: string;
    label: string;
    className: string;
    readOnly?: boolean;
    disabled?: boolean;
    setValueChange: Function;
    isInvalid?: boolean;
}

const InputFloating: React.FC<InputProps> = ({ id, name, value, type, placeholder, label, className, readOnly, disabled, setValueChange, isInvalid }) => {

    return (
        <div>
            <FloatingLabel label={label} className={className}>
                <Form.Control id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly} onChange={(e) => setValueChange(e.target.value)} value={value != "" ? value : ""} isInvalid={isInvalid} />
                <Form.Control.Feedback type="invalid">{label} es requerid@.</Form.Control.Feedback>
            </FloatingLabel>
        </div>
    )
}

export default InputFloating;
