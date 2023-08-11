import React, { useState } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../atoms/input/Input";
import { DocumentUpload } from "./DocumentUpload";
import Swal from 'sweetalert2';


export const ModalUpload = () => {
    const [modalShow, setModalShow] = useState(false);

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
        <div className="row mt-5">
            <div>
                <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Adjuntar archivos.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="mt-4">
                            <Col sm={6} >
                                <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                                <DocumentUpload />
                            </Col>
                        </Row>
                        

                        <div className="tableGoods">
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
                                            <td>
                                                <Button className="mb-8 col-lg-12" size="sm" variant="danger">Editar</Button>
                                                <Button className="mb-8 col-lg-12" size="sm" variant="danger" onClick={showConfirmationAlert}>Eliminar</Button>
                                                <Button className="mb-8 col-lg-12" size="sm" variant="danger">Descargar</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="mb-8" variant="primary" size="sm">Volver</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}