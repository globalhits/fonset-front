import React from "react";
import { Col, Row, Tab, Table, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import "./FormGoods.scss"

export default function FormGoods() {

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
                    <Col sm={4}>
                        <InputSelected label="Categoria general*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Unidad de medida*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                        <InputFloating label="Valor unit con iva*" type="text" placeholder="" className="mb-6 InputSelected"></InputFloating>
                        <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                    </Col>
                    <Col sm={4}>
                        <InputSelected label="Categoria especifica*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Sub unidad de medida*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                        <InputFloating label="Cantidad*" type="text" placeholder="" className="mb-3 InputSelected"></InputFloating>
                        <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                        <Button className="mb-8 col-lg-16 agregar">AGREGAR</Button>
                    </Col>
                    <Col sm={4}>
                        <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Presentacion*" className="mb-12 inputFloating InputSeleted"></InputSelected>
                        <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Programa*" className="mb-3 inputFloating"></InputSelected>

                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={12}>
                        <div className="tableGoods">
                            <div>
                                <Table responsive hover>
                                    <thead>
                                        <tr className="campos">
                                            <th>Categoria general</th>
                                            <th>Categoria especifica</th>
                                            <th>Nombre bien/Servicio</th>
                                            <th>Estado</th>
                                            <th>Unidad de medida</th>
                                            <th>Sub unidad de medida</th>
                                            <th>Valor unit con iva</th>
                                            <th>Cantidad</th>
                                            <th>SubTotal</th>
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
                                            <td></td>
                                            <td></td>
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
                    </Col>
                </Row>
            </Tab.Container>

            <Button className="mb-8 col-lg-16 btn-cerrar" variant="light" onClick={showConfirmationAlert}>CERRAR</Button>
            <Button className="mb-8 col-lg-16 btn-guardar" variant="outline-primary">GUARDAR</Button>
            <Button className="mb-8 col-lg-16 btn-finalizar" variant="primary">FINALIZAR</Button>


        </div>

    )
}