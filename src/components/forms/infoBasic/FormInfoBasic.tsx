import React from "react";
import InputFloating from "../../atoms/input/Input";
import CheckBox from "../../atoms/check/Check";

import "./style.css"

export default function FormInfoBasic() {
    return (
        <div>
            <div className="ContainerForm">
                <h5 className="title">Información basica</h5>
                <div className="Block1">
                    <CheckBox label="Tecnicas" type="checkbox" />
                    <CheckBox label="Tecnologicas" type="checkbox" />
                    <CheckBox label="Humanas" type="checkbox" />
                </div>
                <div className="Block2">
                    <InputFloating label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Escribe la dependencia responsable" />
                    <InputFloating label="Dependencia funcional responsable *" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
                </div>

            </div>
            <div className="ContainerTables">
                <div className="Block3">

                </div>
                <div className="Block3">

                </div>
                <div className="Block3">

                </div>
            </div>
            
        </div>

    )
}