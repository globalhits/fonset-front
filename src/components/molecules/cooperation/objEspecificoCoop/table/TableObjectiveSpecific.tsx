import React, { useState } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../atoms/input/Input";
import InputSelected from "../../../../atoms/selected/InputSelected";
import DocumentUpload from "../../../upload/DocumentUpload";
import DetailsObjEspecific from "../viewDetailObjCoop/DetailsObjEspecific";


export const TableObjectiveSpecific = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalDetailShow, setModalDetailShow] = useState(false);

    return (
        <div className="row mt-5">
            <div className="col-lg-12">
                <Table className="table table-bordered table-condensed table-striped" style={{ zoom: "0.7" }}>
                    <thead>
                        <tr>
                            <th colSpan={3}>Medidas</th>
                            <th colSpan={3}>Valor</th>
                            <th colSpan={3}>Categoria</th>
                            <th colSpan={3}>Objetivo estrategico</th>
                            <th colSpan={3}>Programa</th>
                            <th rowSpan={2}>Acciones</th>
                        </tr>
                        <tr className="campos" style={{ fontSize: "11px" }}>
                            <th>Estado</th>
                            <th>Unidad</th>
                            <th>Subunidad</th>
                            <th>Unit+iva</th>
                            <th>Cant.</th>
                            <th>SubTotal</th>
                            <th>General</th>
                            <th>Especifica</th>
                            <th>Bien/Servicio</th>
                            <th>Obj.</th>
                            <th>Subtema</th>
                            <th>Acciones</th>
                            <th>Programa</th>
                            <th>Linea</th>
                            <th>Bien/Servicio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Button className="mb-8 col-lg-12" size="sm" variant="primary" onClick={() => setModalShow(true)}>Registro actividad</Button>
                            <Button className="mb-8 col-lg-12" size="sm" variant="primary" onClick={() => setModalDetailShow(true)}>Ver detalle obj especifico</Button>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <DetailsObjEspecific show={modalDetailShow} onHide={() => setModalDetailShow(false)}/>

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
                                <InputSelected label="Tipo de actividad*" className="mb-3 InputSelect" options={[]} onChange={(value: any) => { }} value="" />
                                <InputFloating label="Fecha esperada final*" type="date" className="mb-3 InputSelect" setValueChange={(value: string) => { }} value="" />
                                <InputSelected label="Unidad responsable*" className="mb-3 InputSelect" options={[]} onChange={(value: any) => { }} value="" />
                            </Col>
                            <Col sm={6}>
                                <InputFloating label="Actividad*" type="number" className="mb-3 inputFloatingModal " setValueChange={(value: string) => { }} value="" />
                                <InputFloating label="Valor estimado*" type="number" className="mb-3 inputFloatingModal " setValueChange={(value: string) => { }} value="" />
                                <InputFloating label="Nombre del adjunto*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                            </Col>
                        </Row>
                        
                        <DocumentUpload />

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
        </div>

    )
}