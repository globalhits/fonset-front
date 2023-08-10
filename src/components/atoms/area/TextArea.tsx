import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface TextAreaInterface {
	label?: string;
	classStyle?: string;
	styles?: string;
	placeholder?: string;
}
export default function TextArea({ label, classStyle, styles, placeholder }: TextAreaInterface) {
	return (
		<FloatingLabel controlId="floatingTextarea2" label={label} className={classStyle}>
			<Form.Control as="textarea" placeholder={placeholder} className='form-control-lg' />
		</FloatingLabel>
	);
}