import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import InputFloating from "../../atoms/input/Input";
import InputSelected from "../../atoms/selected/InputSelected";
import Entities from "../originProject/entities";
import FormDataGeneralCoop from "../fonset/dataGeneral/FormDataGeneral";
import FormObjGeneralCoop from "../cooperation/objGeneralCoop/ObjGeneralCoop";
import FormObjEspecificoCoop from "../cooperation/objEspecificoCoop/ObjEspecificoCoop";

export default function FormInfoCooperation() {

    return (
        <div className="container">
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="PROCEDENCIA DEL PROYECTO">
                    <div className="row mt-3">
                        <div className="col-lg-4">
                            <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" placeholder="1234" />
                        </div>
                        <div className="col-lg-4">
                            <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" placeholder="Fecha" />
                        </div>
                        <div className="col-lg-4">
                            <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
                        </div>
                    </div>
                </Tab>

                <Tab eventKey="general" title="DATOS GENERALES">
                    <FormDataGeneralCoop />
                </Tab>

                <Tab eventKey="entidades" title="ENTIDADES">
                    <Entities />

                    <div className="row">
                        <div className="col-lg-6">
                            <InputSelected label="Pais coperante que podria financiar el proyecto" className="mb-3 inputFloating" />
                        </div>
                        <div className="col-lg-6">
                            <InputFloating label="Implementador (es)" className="mb-3 inputFloating" type="text" placeholder="Indique el operador que podria ejecutar el proyecto." />
                        </div>
                    </div>

                </Tab>

                <Tab eventKey="obj_general" title="OBJ. GENERAL">
                    <FormObjGeneralCoop />
                </Tab>
                
                <Tab eventKey="obj_especifico" title="OBJ. ESPECIFICO">
                    <FormObjEspecificoCoop />
                </Tab>
            </Tabs>
        </div>
    )
}