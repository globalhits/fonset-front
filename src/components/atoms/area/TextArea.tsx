import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface TextAreaInterface {
	label?: string;
	classStyle?: string;
	styles?: string;
}
export default function TextArea({ label, classStyle, styles }: TextAreaInterface) {
	return (
		<FloatingLabel controlId="floatingTextarea2" label={label} className={classStyle}>
			<Form.Control as="textarea" placeholder="Leave a comment here" className='form-control-lg' />
		</FloatingLabel>
	);
}