import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface InputProps {
    type: string;
    placeholder: string;
    controlId: string;
    label: string;
    className: string;
  }

export default function InputFloating(props: InputProps){

    const {type, placeholder, controlId, label, className} = props;
    
    return(
        <div>
            <FloatingLabel controlId={controlId} label={label} className={className}>
                <Form.Control type={type} placeholder={placeholder} />
            </FloatingLabel>
        </div>
    )
}
