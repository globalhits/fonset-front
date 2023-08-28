import React, { useRef, useState } from 'react';

import "./uploadFile.scss";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { GeneralSelector, addDocuments } from '../../../redux/states/generals/general.slice';
import helper from '../../../utils/helper';


const FileUploader = ({ }) => {

	const { data } = useAppSelector(GeneralSelector);

	const dispatch = useAppDispatch();

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
			// alert('Los archivos no cumplen con los requisitos (formato o tamaño).');

			return;
		}

		console.log("validFiles", validFiles);

		let base64: any = await helper.blobToBase64(validFiles[0]);


		const updatedFiles = validFiles.map((file: any) => ({
			name: file.name,
			extension: file.name.split('.').pop(),
			base64: base64,
			file
		}));

		let documents = data.PROY_DOCUMENTOS_ANEXOS ? data.PROY_DOCUMENTOS_ANEXOS : [];

		let newList = [...documents, {
			INDEX: helper.getRandomInt(),
			id: helper.getRandomInt(),
			name: updatedFiles[0].name,
			extension: updatedFiles[0].extension,
			base64: base64
		}]

		dispatch(addDocuments(newList))
	};

	return (
		<div className="file-dropzone" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
			<p>Arrastra un archivo (Imagenes y documentos) aquí</p>
		</div>
	);
};

export default FileUploader;
