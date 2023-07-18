import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CheckExample from '../../atoms/check/Check';
import InputFloating from '../../atoms/input/Input';

interface MyVerticallyCenteredModalProps {
  onHide: () => void;
  show: boolean;
}

function MyVerticallyCenteredModal(props: MyVerticallyCenteredModalProps) {
  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          INFORMACION BASICA
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Tipo de proyecto</h5>
        <CheckExample label="Tecnicas" type="checkbox" />
        <CheckExample label="Tecnologicas" type="checkbox" />
        <CheckExample label="Humanas" type="checkbox" />
        <div>
          <InputFloating label="Entidad /Dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
          <InputFloating label="Dependencia funcional Responsable *" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
        </div>
        <div>
          <InputFloating label="Entidad /Dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
          <InputFloating label="Dependencia funcional Responsable *" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
