import React from "react";
import { Table, Button, Col, Row, Tab } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import {BsPencilSquare, BsDownload} from 'react-icons/bs'

type ModalProps = {
    show: boolean;
    onHide: () => void;
};

const ViewUpload: React.FC<ModalProps> = ({ show, onHide }) => {

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
                                <Table className="table table-bordered table-condensed table-striped" style={{ zoom: "0.7" }}>
                                    <thead>
                                        <tr className="campos" style={{ fontSize: "18px" }}>
                                            <th>Descripcion</th>
                                            <th>Archivo</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <Button className="mb-8 col-lg-2" size="sm" variant="success"><BsPencilSquare/></Button>
                                            <Button className="mb-8 col-lg-2" size="sm" variant="warning"><BsDownload/></Button>
                                        </td>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Tab.Container >
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-8" variant="primary" size="sm">Volver</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewUpload;