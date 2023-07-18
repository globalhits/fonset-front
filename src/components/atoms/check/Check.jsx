import React from 'react';
import Form from 'react-bootstrap/Form';

interface CheckBoxProps {
  label: string;
  type: string;
}


function CheckExample({ label, type }: CheckBoxProps) {

  return (
    <Form>
        <div className="mb-3">
          <Form.Check type={type} label={label} />
        </div>
    </Form>
  );
}

export default CheckExample;
