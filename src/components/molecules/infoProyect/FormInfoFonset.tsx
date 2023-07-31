import React from "react";
import InputFloating from "../../atoms/input/Input";
import './FormInfoProyect.scss'
import { Tab, Tabs } from "react-bootstrap";
import FormDataGeneral from "../fonset/dataGeneral/FormDataGeneral";
import FormGoods from "../fonset/goods/FormGoods";

export default function FormInfoFonset() {

    return (
        <div className="container">
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
                <Tab eventKey="home" title="INFORMACION DE PROYECTO">
                    <div className="containerInfo">
                        <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" placeholder="1234" />
                        <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" placeholder="Fecha" />
                        <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
                    </div>
                </Tab>

                <Tab eventKey="general" title="DATOS GENERALES">
                    <FormDataGeneral />
                </Tab>

                <Tab eventKey="description" title="DESCRIPCION">
                    <FormDataGeneral />
                </Tab>

                <Tab eventKey="goods" title="BIENES">
                    <FormGoods />
                </Tab>

            </Tabs>
        </div>
    )
}