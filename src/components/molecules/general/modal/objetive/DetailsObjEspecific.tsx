import React from "react";
import { Button, Tab } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { SpecificObjetiveDto } from "../../../../../models/general/SpecificObjetiveDto";
import { GeneralSpecific } from "../../objective/generalSpecific/GeneralSpecific";

type ModalProps = {
    type: string;
    show: boolean;
    onHide: () => void;
};

const ModalDetailsObjEspecific: React.FC<ModalProps> = ({ type, show, onHide }) => {

    return (
        <div>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle de objetivos especificos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <GeneralSpecific type={type} viewDetail={true} />
                    </Tab.Container >
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mb-8" variant="default" size="sm" onClick={onHide}>CERRAR</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDetailsObjEspecific;