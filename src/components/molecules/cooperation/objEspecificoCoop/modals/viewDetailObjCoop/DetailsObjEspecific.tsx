import React, { useState } from "react";
import { Button, Col, Row, Tab } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../../atoms/input/Input";
import InputSelected from "../../../../../atoms/selected/InputSelected";
import { GeneralObjective } from "../../../../Invertion/infoProject/generalObjective/GeneralObjective";
import { GeneralSpecific } from "../../../../Invertion/infoProject/generalSpecific/GeneralSpecific";
import { SpecificObjetiveDto } from "../../../../../../models/general/SpecificObjetiveDto";

type ModalProps = {
    type: string;
    show: boolean;
    objetive: SpecificObjetiveDto
    onHide: () => void;
};

const ModalDetailsObjEspecific: React.FC<ModalProps> = ({ type, objetive, show, onHide }) => {

    return (
        <div>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle de objetivos especificos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <GeneralSpecific type={type} viewDetail={true} valueItem={objetive} />
                    </Tab.Container >
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-8" variant="default" size="sm">CERRAR</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDetailsObjEspecific;