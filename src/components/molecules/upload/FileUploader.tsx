import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';

export default function FileUploader() {
	const fileInputRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event: any) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const handleUpload = () => {
		// Aquí puedes implementar la lógica para subir el archivo al servidor, si es necesario.
		// Por ejemplo, podrías utilizar fetch() o una librería para realizar la carga.
		console.log('Archivo seleccionado:', selectedFile);
		// ... Lógica de carga del archivo ...
	};

	return (
		<Form>
			<Form.Group controlId="fileInput" >
				<Form.Control
					type="file"
					ref={fileInputRef}
					onChange={() => { }}
				/>
			</Form.Group>
			<br />
			<br />
		</Form>
	);
};
