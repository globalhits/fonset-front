import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import InputFloating from '../atoms/input/Input';
import FormInfoBasic from './modal/modalFormBasic';

import './FormInfoBasic.css'

/* MODAL, ARREGLAR  MODAL, LLAMAR FORMULARIOS. */

export default function FormFloatingBasicExample() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [lgShow, setLgShow] = useState(false);

  return (
    < >
      <div className='Container'>

        <div className='ContainerFormInfo'>
          <InputFloating controlId="floatingText" label="Cod. proyecto*" className="mb-3 inputFloating" type="number" placeholder="1234" />
          <InputFloating controlId="floatingPassword" label="Fecha*" className="mb-3 inputFloating" type="date" placeholder="Fecha" />
          <InputFloating controlId="floatingPassword" label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
        </div>

        <div className='ContainerBtnSection'>
          <Button  onClick={() => setLgShow(true)} aria-controls="example-collapse-text" aria-expanded={open} className='Button'>
            Informacion Basica
          </Button>
          {/* <Collapse in={open}>
            <div id="example-collapse-text" className='formInfoProyect'>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse> */}

          <Button onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1} className='Button'>
            Proyecto
          </Button>
          <Collapse in={open1}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>

          <Button onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2} className='Button'>
            Obj. General
          </Button>
          <Collapse in={open2}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>

          <Button onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3} className='Button'>
            Obj. Especifico
          </Button>
          <Collapse in={open3}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>

        </div>
      </div>


    </>
  );
}

