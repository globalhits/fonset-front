import React from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import TablaInvolucradas from "../../../atoms/table/Table";
import { Table } from 'react-bootstrap';

import "./FormGoods.scss"

export default function FormGoods() {
    return (   
        <div className="containerInfoGoods">

            <div className="col-lg-3 ">
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Municipio de origen*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating InputSeleted"></InputSelected>     
            </div>
            <div className="col-lg-3 ">
                
                <InputSelected label="Municipio de origen*"   className="mb-3 inputFloating InputSeleted"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-12 inputFloating InputSeleted"></InputSelected>
                <InputFloating label="Seccional*" type="text" placeholder="" className="mb-6 InputSelected"></InputFloating>
                <InputFloating label="Seccional*" type="text" placeholder="" className="mb-3 InputSelected"></InputFloating>
            </div>
            <div className="col-lg-3 ">               
                <InputSelected label="Municipio de origen*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating InputSeleted"></InputSelected> 
            </div>
            <div className="col-lg-3 ">               
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating InputSeleted"></InputSelected> 
            </div>

           
        </div>

    )
}