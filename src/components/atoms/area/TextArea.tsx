import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { StringOptionsWithImporter } from 'sass';

interface TextAreaInterface {
	label?: string;
	classStyle?: string;
	styles?: any;
	placeholder?: string;
	rows?: number;
	cols?: number;
	name?: string;
	value?: string;
	disabled?: boolean;
	setValueChange: Function;

}
export default function TextArea({ label, classStyle, styles, placeholder, rows, cols, value, disabled = false, setValueChange }: TextAreaInterface) {
	return (
		<FloatingLabel controlId="floatingTextarea2" label={label} className={classStyle}>
			<Form.Control as="textarea" placeholder={placeholder} className='form-control-lg' style={styles} rows={rows} cols={cols} value={value} disabled={disabled} onChange={(e) => setValueChange(e.target.value)} />
		</FloatingLabel>
	);
}