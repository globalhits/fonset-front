import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';

interface CheckProps {
  label: string;
  type: FormCheckType;
}

export default function CheckBox({label, type}: CheckProps) {
  return (
    <Form>
        <div className="mb-3">
          <Form.Check type={type} label={label} />
        </div>
    </Form>
  );
}
