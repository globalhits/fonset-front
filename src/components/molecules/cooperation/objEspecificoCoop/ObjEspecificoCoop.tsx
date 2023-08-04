import React, { useState } from "react";
import { Col, Nav, Row, Tab, Table, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";

export default function FormObjEspecificoCoop() {

    const [modalShow, setModalShow] = useState(false);

    const showConfirmationAlert = () => {
        Swal.fire({
            title: 'Una pregunta',
            text: '¿Seguro que no desea continuar?',
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
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-3">
                    <Col sm={4}>
                        <InputFloating label="Obj. especifico del proyecto*" type="text" placeholder="" className="mb-3 inputFloating "></InputFloating>
                        <InputFloating label="Resultado esperado*" type="text" placeholder="" className="mb-3 inputFloating"></InputFloating>
                        <InputSelected label="Categoria general*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Programa*" className="mb-3 inputFloating"></InputSelected>
                        <Button className="mb-8 col-lg-16 agregar">AGREGAR</Button>
                    </Col>
                    <Col sm={4}>
                        <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating "></InputFloating>
                        <InputFloating label="Fecha esperada inicio*" type="date" placeholder="" className="mb-3 col-lg-13"></InputFloating>
                        <InputSelected label="Categoria especifica*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                        <Button className="mb-8 col-lg-16 agregar">AGREGAR</Button>
                    </Col>
                    <Col sm={4}>
                        <InputFloating label="Indicador cuantitativo o cualitativo*" type="text" placeholder="" className="mb-3 inputFloating "></InputFloating>
                        <InputFloating label="Fecha esperada final*" type="date" placeholder="" className="mb-3 col-lg-13 "></InputFloating>
                        <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                        <Button className="mb-8 col-lg-16 agregar">AGREGAR</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={12}>
                        <div className="tableGoods">
                            <div>
                                <Table responsive hover>
                                    <thead>
                                        <tr className="campos">
                                            <th>Estado</th>
                                            <th>Unidad de medida</th>
                                            <th>Sub unidad de medida</th>
                                            <th>Valor unit con iva</th>
                                            <th>Cantidad</th>
                                            <th>SubTotal</th>
                                            <th>Categoria general</th>
                                            <th>Categoria especifica</th>
                                            <th>Nombre bien/Servicio</th>
                                            <th>Obj. estrategico</th>
                                            <th>Sub tema del Obj. estrategico</th>
                                            <th>Acciones Objs. estrategicos</th>
                                            <th>Programa</th>
                                            <th>Linea de programa</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><Button className="mb-8" variant="primary" onClick={() => setModalShow(true)}>AGREGAR</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </div>
                    </Col>
                </Row>


                <div>
                    <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Actividades y cronograma de los objetivos especificos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <InputFloating label="Obj. especifico*" type="text" placeholder="" className="mb-3 inputFloating "></InputFloating>
                            <InputSelected label="Tipo de actividad*" className="mb-3 "></InputSelected>
                            <InputFloating label="Actividad*" type="number" placeholder="" className="mb-3 inputFloating "></InputFloating>
                            <InputFloating label="Valor estimado*" type="number" placeholder="" className="mb-3 inputFloating "></InputFloating>
                            <InputSelected label="Unidad responsable*" className="mb-3 "></InputSelected>
                            <InputFloating label="Adjuntos*" type="file" placeholder="" className="mb-3 inputFloating"></InputFloating>
                            <Button className="mb-8" variant="primary">AGREGAR</Button>
                            <div className="tableGoods">
                                <div>
                                    <Table responsive hover>
                                        <thead>
                                            <tr className="campos">
                                                <th>No.</th>
                                                <th>Obj. especifico</th>
                                                <th>Tipo actividad</th>
                                                <th>Actividad</th>
                                                <th>Valor estimado</th>
                                                <th>Unidad responsable</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="mb-8" variant="primary">FINALIZAR</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Tab.Container >
        </div >
    )
}