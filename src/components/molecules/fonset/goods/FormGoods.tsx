import React from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import TablaInvolucradas from "../../../atoms/table/Table";
import { Table } from 'react-bootstrap';

import "./FormGoods.scss"

export default function FormGoods() {
    return (
        <div>
            <div className="containerInfoGoods">

                <div className="col-lg-3 ">
                    <InputSelected label="Categoria general*" className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Categoria especifica*" className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Unidad de medida*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                </div>
                <div className="col-lg-3 ">

                    <InputSelected label="Sub unidad de medida*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                    <InputSelected label="Presentacion*" className="mb-12 inputFloating InputSeleted"></InputSelected>
                    <InputFloating label="Valor unit con iva*" type="text" placeholder="" className="mb-6 InputSelected"></InputFloating>
                    <InputFloating label="Cantidad*" type="text" placeholder="" className="mb-3 InputSelected"></InputFloating>
                </div>
                <div className="col-lg-3 ">
                    <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                </div>
                <div className="col-lg-3 ">
                    <InputSelected label="Programa*" className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted"></InputSelected>
                </div>


            </div>
            <div className="Block3">
                <div>
                    <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                        <h6>Dependencias involucradas</h6>
                    </div>
                    <Table responsive hover>
                        <thead>
                            <tr>
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
                                <td>dependencias</td>
                                <td>accion</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

            </div>


        </div>

    )
}