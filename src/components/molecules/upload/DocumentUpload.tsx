import React from "react";

import { Table, Button, Accordion, Row, Col } from "react-bootstrap";
import InputFloating from "../../atoms/input/Input";
import FileUploader from "./FileUploader";
import Swal from "sweetalert2";

export default function DocumentUpload() {

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
            <Accordion defaultActiveKey="1" className="mt-5 mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Adjuntar archivos</Accordion.Header>
                    <Accordion.Body>
                        <Row sm={12}>
                            <Col>
                                <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                            </Col>
                            <Col>
                               <FileUploader />
                            </Col>
                        </Row>
                        
                        <div className="tableDocumentUpload">
                            <div>
                                <Table responsive hover>
                                    <thead>
                                        <tr className="campos" style={{ fontSize: "13px" }}>
                                            <th>Descripcion</th>
                                            <th>Archivo</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td >
                                                <Button className="mb-8 col-lg-3" size="sm" variant="outline-success">Editar</Button>
                                                <Button className="mb-8 col-lg-3" size="sm" variant="danger" onClick={showConfirmationAlert}>Eliminar</Button>
                                                <Button className="mb-8 col-lg-3" size="sm" variant="outline-warning">Descargar</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}