import React from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import CheckBox from "../../../atoms/check/Check";
import TablaInvolucradas from "../../../atoms/table/Table";
import { Table } from 'react-bootstrap';

import "./FormGoods.scss"

export default function FormGoods() {
    return (
        <div className="containerInfoGoods">

            <div className="containerFormsGoods">
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Municipio de origen*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating InputSeleted"></InputSelected>     
            </div>
            <div className="containerFormsGoods">
                
                <InputSelected label="Municipio de origen*"   className="mb-3 inputFloating InputSeleted"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-12 inputFloating InputSeleted"></InputSelected>
                <InputFloating label="Seccional*" type="text" placeholder="" className="mb-6 inputFloating"></InputFloating>
                <InputFloating label="Seccional*" type="text" placeholder="" className="mb-3 inputFloating"></InputFloating>
            </div>
            <div className="containerFormsGoods">                
                <InputSelected label="Municipio de origen*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating InputSeleted"></InputSelected> 
            </div>
            <div className="containerFormsGoods">                
                <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                <InputSelected label="Departamento*"   className="mb-3 inputFloating InputSeleted"></InputSelected> 
            </div>

            <div className="containerFormsGoods">                
                <TablaInvolucradas/>
            </div>

        </div>

    )
}