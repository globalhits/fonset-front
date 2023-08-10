import React, { useState } from "react";
import { Col, Row, Tab, Table, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import { DocumentUpload } from "../../upload/DocumentUpload";
import "./ObjEspecificoCoop.scss"
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific";

export default function FormObjEspecificoCoop() {

    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-3">
                    <div className="col-lg-12">
                        <InputFloating label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                    </div>
                    <Col sm={4}>
                        <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                        <InputFloating label="Fecha esperada inicio*" type="date" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Categoria especifica*" className="mb-3 inputFloating" value="" options={[]} />
                        <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating" value="" options={[]} />
                        <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted" value="" options={[]} />
                    </Col>

                    <Col sm={4}>
                        <InputFloating label="Indicador cuantitativo o cualitativo*" type="text" placeholder="" className="mb-3 inputFloating " setValueChange={(value: string) => { }} value="" />
                        <InputFloating label="Fecha esperada final*" type="date" placeholder="" className="mb-3 col-lg-13 " setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating" />
                        <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted" />
                    </Col>
                    <Col sm={4}>
                        <InputFloating label="Resultado esperado*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Categoria general*" className="mb-3 inputFloating" />
                        <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating" />
                        <InputSelected label="Programa*" className="mb-3 inputFloating" />
                        {/* <Button className=" col-lg-8 agregar" variant="outline-info">AGREGAR OBJETIVO ESPECIFIVO</Button> */}
                    </Col>
                </Row>

                <TableObjectiveSpecific />
            </Tab.Container >
        </div>
    )
}