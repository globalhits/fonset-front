import React from "react";
import TextArea from "../../../atoms/area/TextArea";
import { Tab, Tabs } from "react-bootstrap";
import './FormDescription.scss'


export default function FormDescription() {
    return (
        <div style={{width:"80%"}}>

            <Tabs
                defaultActiveKey="project"
                transition={false}
                id="noanim-tab-example"
                className="mb-4"
            >
                <Tab eventKey="obj_general" title="OBJ. GENERAL*">
                    <TextArea></TextArea>
                </Tab>

                <Tab eventKey="obj_especifico" title="OBJ. ESPECIFICO*">
                     <TextArea></TextArea>
                </Tab>

                <Tab eventKey="poblacion_obj" title="POBLACION OBJETIVO*">
                    <TextArea></TextArea>
                </Tab>
                <Tab eventKey="bienes_Servicios" title="DESC. BIENES Y SERVICIOS*">
                    <TextArea></TextArea>
                </Tab>

                <Tab eventKey="justificacion" title="JUSTIFICACION*">
                    <TextArea></TextArea>
                </Tab>

                <Tab eventKey="problema" title="DESC. DEL PROBLEMA Y ANALISIS DE CAUSA Y EFECTO">
                    <TextArea></TextArea>
                </Tab>

                <Tab eventKey="observaciones" title="OBSERVACIONES*">
                    <TextArea></TextArea>
                </Tab>

                <Tab eventKey="documentos" title="DOCUMENTOS ANEXOS">
                    <TextArea></TextArea>
                </Tab>
                
               
            </Tabs>

        </div>

    )
}