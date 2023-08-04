import React from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import CheckBox from "../../../atoms/check/Check";
import "./FormDataGeneral.scss"

export default function FormDataGeneral() {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="ContainerForm">
                    <h5 className="title">Tipo de proyecto</h5>
                    <div className="ml-5 mt-3">
                        <CheckBox label="Tecnicas" type="checkbox" />
                        <CheckBox label="Tecnologicas" type="checkbox" />
                        <CheckBox label="Humanas" type="checkbox" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <InputSelected label="Dependencia funcional responsable *" className="mb-3 inputFloating" />
            </div>
        </div>

    )
}