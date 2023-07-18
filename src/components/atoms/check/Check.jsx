import React from 'react';
import Form from 'react-bootstrap/Form';

interface CheckProps {
  label: string;
  type: string;
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
