import React, { useRef, useState } from 'react';

import "./uploadFile.scss";

interface FileUploaderInterface {
	setUploadedFiles: Function
}
const FileUploader: React.FC<FileUploaderInterface> = ({ setUploadedFiles }) => {

	const validExtensions = ['pdf', 'png', 'jpg', 'jpeg', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt'];
	const maxFileSize = 10 * 1024 * 1024; // 10 MB en bytes

	const fileInputRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event: any) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const isValidFile = (file: any) => {
		const extension = file.name.split('.').pop().toLowerCase();
		return validExtensions.includes(extension) && file.size <= maxFileSize;
	};


	const handleDrop = async (e: any) => {
		e.preventDefault();

		const acceptedFiles = Array.from(e.dataTransfer.files);

		const validFiles = acceptedFiles.filter(isValidFile);

		if (validFiles.length === 0) {
			alert('Los archivos no cumplen con los requisitos (formato o tamaño).');
			return;
		}

		const updatedFiles = validFiles.map((file: any) => ({
			name: file.name,
			extension: file.name.split('.').pop(),
			file
		}));

		setUploadedFiles((prevFiles: any) => [...prevFiles, ...updatedFiles]); //almacenamos el file en el estado para luego cargarlo al redux general


		// este trycatch es de prueba para enviar los archivos al backen
		/*  
		
		 const formData = new FormData();
		  formData.append('files', validFiles[0]);
		
		try {
			const response = await authAxios.post('/api/jordan/upload', formData);
		
			if (!response || response.status !== 200) {
			  alert('Error al guardar el archivo en el backend');
			  return;
			}
		
			setUploadedFiles(prevFiles => [...prevFiles, ...updatedFiles]);
		  } catch (error) {
			console.error('Error al subir el archivo:', error);
		  } */
	};

	return (
		<div className="file-dropzone" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
			<p>Arrastra un archivo PDF aquí</p>
		</div>
	);
};

export default FileUploader;
