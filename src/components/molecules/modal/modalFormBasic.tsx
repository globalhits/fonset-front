import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


interface ModalProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    size: "lg";
    show: boolean;
    onHide: () => void;
    name: string
  }


export default function FormInfoBasic(props:ModalProps) {
    const {onClick, size, show, onHide, name} = props

  return (
    <>
      <Button onClick={onClick}>Large modal</Button>

      <Modal
        size={size}
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}
