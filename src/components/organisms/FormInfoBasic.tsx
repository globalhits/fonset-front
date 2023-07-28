import React from "react";
import FormInfoProyect from "../forms/infoProyect/FormInfoProyect";
import FormInfoBasic from "../forms/infoBasic/FormInfoBasic";
import NavForms from "../molecules/navbar/NavbarForms";

import "./FormInfoBasic.css";


export default function FormInvertion() {
  return (
    <>
      <div className="Container">
        <div className="ContainerBtnSection">
          <h4 className="text">INFORMACION DE PROYECTO</h4>
          <FormInfoProyect />
          <FormInfoBasic />
        </div>
      </div>
    </>
  );
}
