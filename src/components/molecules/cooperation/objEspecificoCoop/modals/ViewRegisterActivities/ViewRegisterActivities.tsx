import React, { useState } from "react";
import { Table, Button, Col, Row, Tab } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../../atoms/input/Input";
import EditActivity from "../../../../general/RegisterActivity/EditActivity";
import { BsTrash3, BsPencilSquare } from 'react-icons/bs'

type ModalProps = {
    show: boolean;
    onHide: () => void;
};

const ViewRegisterActivities: React.FC<ModalProps> = ({ show, onHide }) => {
    const [modalEditActivity, setModalEditActivity] = useState(false);

    return (
        <div>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Actividades registradas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="mt-3">
                            <Col sm={12}>
                                <InputFloating label="Objetivo especifico." className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" readOnly />
                            </Col>
                            <Col sm={12}>
                                <Table className="table table-bordered table-condensed table-striped" style={{ zoom: "0.7" }}>
                                    <thead>
                                        <tr className="campos" style={{ fontSize: "15px" }}>
                                            <th>No</th>
                                            <th>Obj. especifico</th>
                                            <th>Tipo actividad</th>
                                            <th>Actividad</th>
                                            <th>Presupuesto</th>
                                            <th>Unid.responsable</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <Button className="mb-8 col-lg-6" size="sm" variant="success" onClick={() => setModalEditActivity(true)}> <BsPencilSquare /> </Button>
                                            <Button className="mb-8 col-lg-6" size="sm" variant="danger"> <BsTrash3 /> </Button>
                                        </td>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Tab.Container >
                    <EditActivity show={modalEditActivity} onHide={() => setModalEditActivity(false)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-8" variant="primary" size="sm">Finalizar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewRegisterActivities;