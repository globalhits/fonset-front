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
<<<<<<< HEAD
                        <InputSelected label="Categoria general*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Unidad de medida*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                        <InputFloating label="Valor unit con iva*" type="text" placeholder="" className="mb-6 InputSelected" setValueChange={(value: string) => { }} value=""></InputFloating>
                        <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                    </Col>
                    <Col sm={4}>
                        <InputSelected label="Categoria especifica*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Sub unidad de medida*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                        <InputFloating label="Cantidad*" type="text" placeholder="" className="mb-3 InputSelected" setValueChange={(value: string) => { }} value=""></InputFloating>
                        <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted"></InputSelected>
=======
                        <InputSelected label="Categoria general*" className="mb-3 inputFloating" value="" options={[]}></InputSelected>
                        <InputSelected label="Unidad de medida*" className="mb-3 inputFloating InputSeleted" value="" options={[]}></InputSelected>
                        <InputFloating label="Valor unit con iva*" type="text" placeholder="" className="mb-6 InputSelected" setValueChange={(value: string) => { }} value=""></InputFloating>
                        <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating" value="" options={[]}></InputSelected>
                        <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted" value="" options={[]}></InputSelected>
                    </Col>
                    <Col sm={4}>
                        <InputSelected label="Categoria especifica*" className="mb-3 inputFloating" value="" options={[]}></InputSelected>
                        <InputSelected label="Sub unidad de medida*" className="mb-3 inputFloating InputSeleted" value="" options={[]}></InputSelected>
                        <InputFloating label="Cantidad*" type="text" placeholder="" className="mb-3 InputSelected" setValueChange={(value: string) => { }} value=""></InputFloating>
                        <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted" value="" options={[]}></InputSelected>
                        <Button className="mb-8 col-lg-16 agregar">AGREGAR</Button>
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                    </Col>
                    <Col sm={4}>
                        <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Presentacion*" className="mb-12 inputFloating InputSeleted"></InputSelected>
                        <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating"></InputSelected>
                        <InputSelected label="Programa*" className="mb-3 inputFloating"></InputSelected>
                    </Col>
                </Row>
                <Button className=" col-lg-18 agregar" style={{ marginLeft: "1080px", marginTop: "-50px" }}>AGREGAR</Button>
                <Row className="mt-3">
                    <Col sm={12}>
                        <div className="tableGoods">
                            <div>
                                <Table responsive hover>
                                    <thead>
                                        <tr className="campos" style={{ fontSize: "14px" }}>
                                            <th> Categoria
                                                <th>General</th>
                                                <th>Especifica</th>
                                                <th>Bien/Servicio</th>
                                            </th>
                                            <th> Medidas
                                                <th>Estado</th>
                                                <th>Unidad</th>
                                                <th>Subunidad</th>
                                            </th>

                                            <th> Valor
                                                <th>Unit+iva</th>
                                                <th>Cant.</th>
                                                <th>SubTotal</th>
                                            </th>

                                            <th> Objetivo estrategico
                                                <th>Obj.</th>
                                                <th>Subtema</th>
                                            </th>
                                            <th> Acciones  </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ fontSize: "12px" }}>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </td>

                                            <td>
                                                <td></td>
                                                <td></td>
                                            </td>
                                            <td>
                                                <td><Button className="mb-8 col-lg-12" size="sm" variant="primary">AGREGAR</Button></td>
                                            </td>
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