import React from "react";
import { Col, Row, Tab, Table, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import "./FormGoods.scss"
import Buttons from "../../../atoms/button/Buttons";
import TableListGoods from "./table/TableListGoods";

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
        <>
            <Row>
                <Col lg="4">
                    <InputSelected label="Categoria general*" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
                <Col lg="4">
                    <InputSelected label="Categoria especifica*" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
                <Col lg="4">
                    <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
            </Row>
            <Row>
                <Col lg="2">
                    <InputSelected label="Unidad de medida*" className="mb-3 inputFloating InputSeleted" options={[]} onChange={(value: any) => { }} value="" />

                </Col>
                <Col lg="2">
                    <InputSelected label="Sub de medida*" className="mb-3 inputFloating InputSeleted" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
                <Col lg="4">
                    <InputSelected label="Presentacion*" className="mb-12 inputFloating InputSeleted" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
                <Col lg="2">
                    <InputFloating label="Valor unit con iva*" type="text" placeholder="" className="mb-6 InputSelected" setValueChange={(value: string) => { }} value=""></InputFloating>
                </Col>
                <Col lg="2">
                    <InputFloating label="Cantidad*" type="text" placeholder="" className="mb-3 InputSelected" setValueChange={(value: string) => { }} value=""></InputFloating>
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
                <Col lg="4">
                    <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />

                </Col>
                <Col lg="4">
                    <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={4}>
                    <InputSelected label="Programa*" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
                <Col sm={4}>
                    <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted" options={[]} onChange={(value: any) => { }} value="" />
                </Col>
                <div className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar bien/servicio" classStyle="mt-4 " onClick={() => { }} />
                </div>
            </Row>
            <hr />
            <TableListGoods />
        </>
    )
}