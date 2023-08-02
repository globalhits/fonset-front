import React from "react";
import TextArea from "../../../atoms/area/TextArea";
import { Tab, Tabs} from "react-bootstrap";
import {Table} from "react-bootstrap";
import './FormDescription.scss'

export default function FormDescription() {
    return (
        <div style={{width:"80%"}}>

            <Tabs defaultActiveKey="project" transition={false} id="noanim-tab-example" className="mb-4" style={{marginTop:"50px"}}>
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
            </Tabs>

            <Tabs defaultActiveKey="project" transition={false} id="noanim-tab-example" className="mb-4" style={{marginTop:"50px"}}>
                <Tab eventKey="justificacion" title="JUSTIFICACION*">
                    <TextArea></TextArea>
                </Tab>

                <Tab eventKey="problema" title="DESC. DEL PROBLEMA Y ANALISIS DE CAUSA Y EFECTO">
                    <TextArea></TextArea>
                </Tab>

                <Tab eventKey="observaciones" title="OBSERVACIONES*">
                    <TextArea></TextArea>
                </Tab>
            </Tabs>

            <Tabs style={{marginTop:"50px"}}>
                <Tab eventKey="documentos" title="DOCUMENTOS ANEXOS">
                <div className="Block3">
                <div>
                    <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                        <h6>Adjuntar archivos</h6>
                    </div>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>Descripcion</th>
                                <th>Archivo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Descripcion</td>
                                <td>URL</td>
                                <td>accion</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

            </div>
                </Tab>
            </Tabs>
        </div>

    )
}