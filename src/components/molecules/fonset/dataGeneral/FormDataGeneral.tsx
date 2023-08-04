import React from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import "./FormDataGeneral.scss"

export default function FormDataGeneral() {
    return (
        <div className="containerInfo">
            <div className="col-lg-4 ">
                    <InputFloating label="Sub. regional apoyo*" type="text" placeholder="" className="mb-3 InputSelected"></InputFloating>
                    <InputFloating label="Seccional*" type="text" placeholder="" className="mb-3 inputFloating"></InputFloating>
            </div>
            <div className="col-lg-4 ">
                    <InputSelected label="Departamento*"   className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Municipio de origen*"   className="mb-3 inputFloating"></InputSelected>
            </div>
            <div className="col-lg-4 ">
                    <InputSelected label="Entidad dependencia responsable*"   className="mb-3 inputFloating"></InputSelected>
                    <InputSelected label="Dsitrito judicial*"   className="mb-3 inputFloating"></InputSelected>
            </div>
        </div>

    )
}