import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



export default function TextArea() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="Comments" className='TextArea'>
        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
      </FloatingLabel>
    </>
  );
}