import React, { useState } from "react";
import { Button, Col, Row, Tab } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../atoms/input/Input";
import InputSelected from "../../../../atoms/selected/InputSelected";

type ModalProps = {
    show: boolean;
    onHide: () => void;
};

const ModalDetailsObjEspecific: React.FC<ModalProps> = ({ show, onHide }) => {

    return (
        <div>
            <div>
                <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Detalle de objetivos especificos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className="mt-3">
                                <div className="col-lg-12">
                                    <InputFloating label="Justificación o antecedentes del proyecto." className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" readOnly/>
                                </div>
                                <Col sm={4}>
                                    <InputFloating label="Descripcion." type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Meta." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Entregable." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Categoria general." type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Subtema obj estrategico." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Lineas del programa." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                </Col>

                                <Col sm={4}>
                                    <InputFloating label="Indicador." type="text" placeholder="" className="mb-3 inputFloating " setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Fecha inicio." type="date" placeholder="" className="mb-3 col-lg-13 " setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Descripcion." type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Categoria especifica." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Acciones obj. estartegico." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                </Col>
                                <Col sm={4}>
                                    <InputFloating label="Linea base." type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Fecha final." type="date" placeholder="" className="mb-3 col-lg-13 " setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Obj. est. de direccionamiento." type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Nombre bien / servicio." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <InputFloating label="Programa." type="text" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" readOnly/>
                                    <Button className=" col-lg-8 agregar" variant="outline-info">AGREGAR OBJETIVO ESPECIFIVO</Button>
                                </Col>
                            </Row>
                        </Tab.Container >
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="mb-8" variant="danger" size="sm">CERRAR</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default ModalDetailsObjEspecific;