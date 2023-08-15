import React from "react";
import InputSelected from "../../../atoms/selected/InputSelected";
import CheckBox from "../../../atoms/check/Check";
import "./FormDataGeneralCoop.scss"

export default function FormDataGeneralCoop({ formData, setFormData }) {
    return (
        <div className="row">
            <div className="col-lg-4" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="ContainerForm">
                    <h5 className="title">Tipo de proyecto</h5>
                    <div className="ml-5 mt-3">
                        <CheckBox label="Tecnicas" type="checkbox" value="Tecnicas" setValueChange={() => { }} />
                        <CheckBox label="Tecnologicas" type="checkbox" value="Tecnologicas" setValueChange={() => { }} />
                        <CheckBox label="Humanas" type="checkbox" value="Humanas" setValueChange={() => { }} />
                    </div>
                </div>
            </div>
            <div className="col-lg-8 ">
                <InputSelected label="Dependencia funcional responsable *" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />
            </div>
        </div>
    )
}