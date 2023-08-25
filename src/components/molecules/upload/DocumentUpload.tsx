import React, { useEffect, useState } from "react";

import { Table, Row, Col } from "react-bootstrap";
import InputFloating from "../../atoms/input/Input";
import FileUploader from "./FileUploader";
import Swal from "sweetalert2";
import { useAppSelector } from "../../../redux/hooks";
import { GeneralSelector } from "../../../redux/states/generals/general.slice";

export default function DocumentUpload() {

    const { data } = useAppSelector(GeneralSelector)

    const [uploadedFiles, setUploadedFiles] = useState([]);

    useEffect(() => {
        console.log("All Files", uploadedFiles)
    }, [uploadedFiles])

    const showConfirmationAlert = () => {
        Swal.fire({
            title: 'Una pregunta',
            text: '¿Está seguro de eliminar el registro? ',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar',
            cancelButtonText: 'Si, seguro',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes agregar el código para cerrar la ventana o realizar alguna acción adicional
                console.log('La ventana se cerrará');
            }
        });
    };

    return (
        <div>
            <Row className="mt-5 mb-5">
                <Col sm={12}>
                    <FileUploader setUploadedFiles={setUploadedFiles} />
                </Col>
            </Row>

            <Row className="tableDocumentUpload">
                <Col sm={12}>
                    <Table responsive hover>
                        <thead>
                            <tr className="campos" style={{ fontSize: "13px" }}>
                                <th>Archivo</th>
                                <th>Extensión</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uploadedFiles.map((file: any, index: number) => (
                                <tr key={index}>
                                    <td>{file.name}</td>
                                    <td>{file.extension}</td>
                                    <td>
                                        <button onClick={() => showConfirmationAlert()}>Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}