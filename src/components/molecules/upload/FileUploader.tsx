import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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
			<Form.Group controlId="fileInput">
				<Form.Label>Selecciona un archivo</Form.Label>
				<Form.Control
					type="file"
					ref={fileInputRef}
					onChange={() => { }}
				/>
			</Form.Group>
			<Button variant="primary" onClick={() => { }} disabled={false}>
				Subir archivo
			</Button>
		</Form>
	);
};
