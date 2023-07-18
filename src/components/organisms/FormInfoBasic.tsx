import React from 'react';
import FormInfoProyect from '../forms/infoProyect/FormInfoProyect';
import FormInfoBasic from '../forms/infoBasic/FormInfoBasic';
import NavForms from '../molecules/navbar/NavbarForms';

import './FormInfoBasic.css'


export default function FormFloatingBasicExample() {

  return (
    < >
      <div className='Container'>
        <div className='ContainerBtnSection'>
        <h4 className="text">INFORMACION DE PROYECTO</h4>
          <NavForms/>
          <FormInfoProyect/>
          <FormInfoBasic/>
        </div>
      </div>


    </>
  );
}

