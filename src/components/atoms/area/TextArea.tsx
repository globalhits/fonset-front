import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface TextAreaInterface {
	label?: string;
	classStyle?: string;
	styles?: any;
	placeholder?: string;
	rows?: number;
	cols?: number;

}
export default function TextArea({ label, classStyle, styles, placeholder, rows, cols }: TextAreaInterface) {
	return (
		<FloatingLabel controlId="floatingTextarea2" label={label} className={classStyle}>
			<Form.Control as="textarea" placeholder={placeholder} className='form-control-lg' style={styles} rows={rows} cols={cols} />
		</FloatingLabel>
	);
}