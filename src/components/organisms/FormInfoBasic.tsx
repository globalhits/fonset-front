import React, { useState } from 'react';
/* import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from '../molecules/modal/modalFormBasic'; */

import FormInfoProyect from '../forms/infoProyect/FormInfoProyect';
import FormInfoBasic from '../forms/infoBasic/FormInfoBasic';

import './FormInfoBasic.css'

/* MODAL, ARREGLAR  MODAL, LLAMAR FORMULARIOS. */

export default function FormFloatingBasicExample() {

  /* const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false); */

  return (
    < >
    
      <div className='Container'>
        {/* <div className='ContainerFormInfo'>
          <FormInfoProyect/>
        </div> */}

        <div className='ContainerBtnSection'>
        <h4 className="text">INFORMACION DE PROYECTO</h4>
          <FormInfoProyect/>
          <FormInfoBasic/>

          {/* <Button variant="primary" onClick={() => setModalShow(true)} className="Button">
            Informacion basica
          </Button>
          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />

          <Button variant="primary" onClick={() => setModalShow1(true)} className="Button">
            Proyecto
          </Button>
          <MyVerticallyCenteredModal show={modalShow1} onHide={() => setModalShow1(false)} />

          <Button variant="primary" onClick={() => setModalShow2(true)} className="Button">
          Objetivo General
          </Button>
          <MyVerticallyCenteredModal show={modalShow2} onHide={() => setModalShow2(false)} />

          <Button variant="primary" onClick={() => setModalShow3(true)} className="Button">
            Objetivo Especifico
          </Button>
          <MyVerticallyCenteredModal show={modalShow3} onHide={() => setModalShow3(false)} /> */}
        </div>
      </div>


    </>
  );
}

