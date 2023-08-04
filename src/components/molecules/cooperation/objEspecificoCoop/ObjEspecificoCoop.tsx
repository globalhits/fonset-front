import React, { useState } from "react";
import { Col, Nav, Row, Tab, Table, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";

export default function FormObjEspecificoCoop() {
    const showConfirmationAlert = () => {
        Swal.fire({
            title: 'Una pregunta',
            text: '¿Seguro que no desea continuar?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar',
            cancelButtonText: 'Si, seguro',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes agregar el código para cerrar la ventana o realizar alguna acción adicional
                console.log('La ventana se cerrará');
            }
        });
    };

    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-3">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="indicadores">OBJETIVOS E INDICADORES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="categoria">INFO. CATEGORIA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="objetivos">INFO. OBJETIVOS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-16">
                                <Nav.Link eventKey="programa">INFO. PROGRAMA</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="indicadores">
                                <InputFloating label="Obj. especifico del proyecto*" type="text" placeholder="" className="mb-3 inputFloating "></InputFloating>
                                <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating "></InputFloating>
                                <InputFloating label="Indicador cuantitativo o cualitativo*" type="text" placeholder="" className="mb-3 inputFloating "></InputFloating>
                                <InputFloating label="Resultado esperado*" type="text" placeholder="" className="mb-3 inputFloating"></InputFloating>
                                <InputFloating label="Fecha esperada inicio*" type="date" placeholder="" className="mb-3 col-lg-3"></InputFloating>
                                <InputFloating label="Fecha esperada final*" type="date" placeholder="" className="mb-3 col-lg-3 "></InputFloating>
                                <div className="tableGoods">
                                    <div>
                                        <Table responsive hover>
                                            <thead>
                                                <tr className="campos">
                                                    <th>Estado</th>
                                                    <th>Unidad de medida</th>
                                                    <th>Sub unidad de medida</th>
                                                    <th>Valor unit con iva</th>
                                                    <th>Cantidad</th>
                                                    <th>SubTotal</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="categoria">
                                <InputSelected label="Categoria general*" className="mb-3 inputFloating"></InputSelected>
                                <InputSelected label="Categoria especifica*" className="mb-3 inputFloating"></InputSelected>
                                <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating"></InputSelected>
                                <div className="tableGoods">
                                    <div>
                                        <Table responsive hover>
                                            <thead>
                                                <tr className="campos">
                                                    <th>Categoria general</th>
                                                    <th>Categoria especifica</th>
                                                    <th>Nombre bien/Servicio</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>

                                </div>
                            </Tab.Pane>



                            <Tab.Pane eventKey="objetivos">
                                <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating"></InputSelected>
                                <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating"></InputSelected>
                                <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                                <div className="tableGoods">
                                    <div>
                                        <Table responsive hover>
                                            <thead>
                                                <tr className="campos">
                                                    <th>Obj. estrategico</th>
                                                    <th>Sub tema del Obj. estrategico</th>
                                                    <th>Acciones Objs. estrategicos</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>

                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="programa">
                                <InputSelected label="Programa*" className="mb-3 inputFloating"></InputSelected>
                                <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                                <Button className="mb-8 col-lg-16 agregar">AGREGAR</Button>
                                <div className="tableGoods">
                                    <div>
                                        <Table responsive hover>
                                            <thead>
                                                <tr className="campos">
                                                    <th>Programa</th>
                                                    <th>Linea de programa</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>




        </div>

    )
}