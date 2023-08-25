import React from "react";
import { Tabs, Table, Button, Col, Row, Tab } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import FileUploader from "../../upload/FileUploader";

type ModalProps = {
    show: boolean;
    onHide: () => void;
};

const EditActivity: React.FC<ModalProps> = ({ show, onHide }) => {

    return (
        <div>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar actividades registradas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="general"
                        transition={false}
                        id="info-project"
                        className="mt-4 mb-3"
                    >
                        <Tab eventKey="general" title="DATOS GENERALES">
                            <Row className="mt-3">
                                <Col sm={12}>
                                    <InputFloating label="Objetivo especifico." className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" readOnly />
                                </Col>
                                <Col sm={6}>
                                    <InputSelected label="Tipo de actividad*" className="mb-3 InputSelect" options={[]} onChange={(value: any) => { }} value="" />
                                    <InputSelected label="Presupuesto estimado*" className="mb-3 InputSelect" options={[]} onChange={(value: any) => { }} value="" />
                                </Col>
                                <Col sm={6}>
                                    <InputFloating label="Actividad*" type="text" className="mb-3 InputSelect" setValueChange={(value: string) => { }} value="" />
                                    <InputSelected label="Unidad responsable*" className="mb-3 InputSelect" options={[]} onChange={(value: any) => { }} value="" />
                                </Col>
                                <Col sm={6}>
                                    <InputFloating label="Nombre del adjunto*" type="text" className="mb-3 InputSelect" setValueChange={(value: string) => { }} value="" />

                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-8" variant="outline-success" size="sm">Editar actividad</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditActivity;