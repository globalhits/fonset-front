import React from "react";
import { Col, Nav, Row, Tab, Table } from "react-bootstrap";
import TextArea from "../../../atoms/area/TextArea";
import './FormDescription.scss'

export default function FormDescription() {
    return (
        <div style={{ width: "80%" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-8">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="obj_general">OBJ. GENERAL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="obj_especifico">OBJ. ESPECIFICO</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="poblacion_obj">POBLACION OBJETIVO</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="bienes_servicios">DESC. BIENES Y SERVICIOS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="justificacion">JUSTIFICACION</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="problema" className="w-auto text-nowrap">DESC. DEL PROBLEMA Y ANALISIS DE CAUSA Y EFECTO</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="observaciones">OBSERVACIONES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="documentos">DOCUMENTOS ANEXOS</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={6} className="area">
                        <Tab.Content >
                            <Tab.Pane eventKey="obj_general" >
                                <TextArea ></TextArea>
                            </Tab.Pane>

                            <Tab.Pane eventKey="obj_especifico">
                                <TextArea></TextArea>
                            </Tab.Pane>

                            <Tab.Pane eventKey="poblacion_obj">
                                <TextArea></TextArea>
                            </Tab.Pane>

                            <Tab.Pane eventKey="bienes_servicios">
                                <TextArea></TextArea>
                            </Tab.Pane>

                            <Tab.Pane eventKey="justificacion">
                                <TextArea></TextArea>
                            </Tab.Pane>

                            <Tab.Pane eventKey="problema">
                                <TextArea></TextArea>
                            </Tab.Pane>

                            <Tab.Pane eventKey="observaciones">
                                <TextArea></TextArea>
                            </Tab.Pane>

                            <Tab.Pane eventKey="documentos">
                                <Table className="table table-bordered table-condensed table-stripe" style={{ marginLeft: "200px" }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center">Descripcion</th>
                                            <th className="text-center">Archivo</th>
                                            <th className="text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>


        </div>

    )
}