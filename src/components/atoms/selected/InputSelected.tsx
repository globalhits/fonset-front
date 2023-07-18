import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './InputSelected.css'

interface InputSelectedProps {
    label: string;
    className: string;
  }

export default function InputSelected({ label, className}: InputSelectedProps) {
    return (
        <FloatingLabel label={label} className='InputSelected'>
            <Form.Select aria-label="Floating label select example">
                <option>Seleccione Dependencia</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </FloatingLabel>
    )
}