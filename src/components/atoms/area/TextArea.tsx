import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



export default function TextArea() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="" className="w-100 h-100">
        <Form.Control as="textarea" placeholder="Leave a comment here" className='form-control-lg' style={{ height: '400px', marginLeft:"200px" }}/>
      </FloatingLabel>
    </>
  );
}