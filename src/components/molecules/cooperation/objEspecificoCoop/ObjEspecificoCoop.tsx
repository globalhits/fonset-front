import React, { useState } from "react";
import { Col, Row, Tab, Table, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import "./ObjEspecificoCoop.scss"

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
                    <div className="col-lg-12">
                        <InputFloating label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                    </div>
                    <Col sm={4}>
                        <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                        <InputFloating label="Fecha esperada inicio*" type="date" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Categoria especifica*" className="mb-3 inputFloating" value="" options={[]} />
                        <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating" value="" options={[]} />
                        <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted" value="" options={[]} />


                    </Col>

                    <Col sm={4}>
                        <InputFloating label="Indicador cuantitativo o cualitativo*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                        <InputFloating label="Fecha esperada final*" type="date" placeholder="" className="mb-3 col-lg-13 " setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating" value="" options={[]} />
                        <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted" value="" options={[]} />

                    </Col>
                    <Col sm={4}>
                        <InputFloating label="Resultado esperado*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Categoria general*" className="mb-3 inputFloating" value="" options={[]} />
                        <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating" value="" options={[]} />
                        <InputSelected label="Programa*" className="mb-3 inputFloating" value="" options={[]} />

                    </Col>

                </Row>
                <Button className=" col-lg-18 agregar" style={{ marginLeft: "965px", marginTop: "-50px" }}>AGREGAR OBJETIVO ESPECIFIVO</Button>
                <Row className="mt-3">
                    <Col sm={12}>
                        <div className="tableGoods">
                            <div>
                                <Table responsive hover>
                                    <thead>
                                        <tr className="campos" style={{ fontSize: "12px" }}>
                                            <th> Medidas
                                                <th>Estado</th>
                                                <th>Unidad</th>
                                                <th>Subunidad</th>
                                            </th>

                                            <th> Valor
                                                <th>Unit+iva</th>
                                                <th>Cant.</th>
                                                <th>SubTotal</th>
                                            </th>

                                            <th> Categoria
                                                <th>General</th>
                                                <th>Especifica</th>
                                                <th>Bien/Servicio</th>
                                            </th>
                                            <th> Objetivo estrategico
                                                <th>Obj.</th>
                                                <th>Subtema</th>
                                                <th>Acciones</th>
                                            </th>
                                            <th> Programa
                                                <th>Programa</th>
                                                <th>Linea</th>
                                                <th>Bien/Servicio</th>
                                            </th>
                                            <th> Acciones  </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ fontSize: "12px" }}>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>

                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td><Button className="mb-8 col-lg-12" size="sm" variant="primary" onClick={() => setModalShow(true)}>AGREGAR</Button></td>
                                            </td>


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
                            <Row className="mt-4">
                                <div>
                                    <InputFloating label="Obj. especifico*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                                </div>

                                <Col sm={6} >
                                    <InputSelected label="Tipo de actividad*" className="mb-3 InputSelect" value="" options={[]} />
                                    <InputFloating label="Fecha esperada final*" type="date" className="mb-3 InputSelect" setValueChange={(value: string) => { }} value="" />
                                    <InputSelected label="Unidad responsable*" className="mb-3 InputSelect" value="" options={[]} />
                                </Col>
                                <Col sm={6}>
                                    <InputFloating label="Actividad*" type="number" className="mb-3 inputFloatingModal " setValueChange={(value: string) => { }} value="" />
                                    <InputFloating label="Valor estimado*" type="number" className="mb-3 inputFloatingModal " setValueChange={(value: string) => { }} value="" />
                                </Col>
                                <Col sm={4}>

                                </Col>
                            </Row>

                            <InputFloating label="Adjuntos*" type="file" placeholder="" className="mb-3 inputFloatingModal" setValueChange={(value: string) => { }} value="" />
                            <Button className="mb-8" variant="primary" size="sm">AGREGAR</Button>
                            <div className="tableGoods">
                                <div>
                                    <Table responsive hover>
                                        <thead>
                                            <tr className="campos" style={{ fontSize: "13px" }}>
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
                                                <td><Button className="mb-8 col-lg-12" size="sm" variant="danger">Eliminar</Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="mb-8" variant="primary" size="sm">FINALIZAR REGISTRO DE ACTIVIDAD</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Tab.Container >
        </div>
    )
}