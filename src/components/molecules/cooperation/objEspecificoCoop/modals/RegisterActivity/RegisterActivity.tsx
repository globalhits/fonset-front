import React from "react";
import { Table, Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../../atoms/input/Input";
import InputSelected from "../../../../../atoms/selected/InputSelected";
import DocumentUpload from "../../../../upload/DocumentUpload";
import { BsTrash3 } from "react-icons/bs";

type ModalProps = {
    show: boolean;
    onHide: () => void;
};

const RegisterActivities: React.FC<ModalProps> = ({ show, onHide }) => {

    return (
        <div>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Actividades y cronograma de los objetivos especificos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="general"
                        transition={false}
                        id="info-project"
                        className="mt-4 mb-3"
                    >
                        <Tab eventKey="general" title="DATOS GENERALES">
                            <Row className="mt-4">
                                <Col sm={12}>
                                    <InputFloating label="Obj. especifico*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                                </Col>

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
                        </Tab>

                        <Tab eventKey="documentos" title="DOCUMENTOS">
                            <DocumentUpload />
                        </Tab>
                    </Tabs>
                    <Row sm={4} style={{marginLeft:"10px"}}>
                        <Button className="mb-12" variant="outline-primary" size="sm">AGREGAR ACTIVIDAD</Button>
                    </Row>

                    <Row style={{ paddingTop:"10px"}}>
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
                                    <td>
                                        <Button className="mb-8 col-lg-12" size="sm" variant="danger">
                                            <BsTrash3 />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-8" variant="primary" size="sm">FINALIZAR REGISTRO DE ACTIVIDAD</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RegisterActivities;