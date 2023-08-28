import React, { useState } from "react";
import { Table, Button, Col, Row, Tab } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../atoms/input/Input";
import EditActivity from "../../RegisterActivity/EditActivity";
import { BsTrash3, BsPencilSquare } from 'react-icons/bs'
import { GeneralSelector } from "../../../../../redux/states/generals/general.slice";
import { useAppSelector } from "../../../../../redux/hooks";
import { ActivityDto } from "../../../../../models/general/ActivityDto";

type ModalProps = {
    type?: string;
    objetivoId?: number;
    show: boolean;
    onHide: () => void;
};

const ViewRegisterActivities: React.FC<ModalProps> = ({ type, objetivoId, show, onHide }) => {

    const { data } = useAppSelector(GeneralSelector);

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
                                        {data.PROY_ACTIVIDADES_FILTERS?.map((item: ActivityDto, index: number) => (
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <Button className="mb-8 col-lg-6" size="sm" variant="success" onClick={() => { }}> <BsPencilSquare /> </Button>
                                                    <Button className="mb-8 col-lg-6" size="sm" variant="danger"> <BsTrash3 /> </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Tab.Container >
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-8" variant="primary" size="sm">Finalizar</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default ViewRegisterActivities;