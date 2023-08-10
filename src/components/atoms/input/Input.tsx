import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface InputProps {
    id?: string;
    name?: string;
    value?: string;
    type: string;
    placeholder?: string;
    label: string;
    className: string;
    readOnly?: boolean;
    setValueChange: Function;
}

const InputFloating: React.FC<InputProps> = ({ id, name, value, type, placeholder, label, className, readOnly, setValueChange }) => {


    return (
        <div>
            <FloatingLabel label={label} className={className}>
                <Form.Control id={id} name={name} type={type} placeholder={placeholder} readOnly={readOnly} onChange={(e) => setValueChange(e.target.value)} value={value != "" ? value : ""} />
            </FloatingLabel>
        </div>
    )
}

<<<<<<< HEAD
export default InputFloating;
=======
export default InputFloating;
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
