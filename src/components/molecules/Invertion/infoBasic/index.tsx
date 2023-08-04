import React, { useState } from "react";

import "./index.scss";

// --- Components Libraries ---
import { Table } from 'react-bootstrap';

// --- Components ---
import CheckBox from "../../../atoms/check/Check";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";

export default function InfoBasic() {

    const [listDependency, setListDependency] = useState([
        {
            id: "",
            text: "Seleccione..."
        }, {
            id: 1,
            text: "ejemplo de dependencia"
        }
    ]);

    return (
        <>
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
                    <InputFloating label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Escribe la dependencia responsable" />
                    <InputSelected label="Dependencia funcional responsable *" className="mb-3 inputFloating" options={listDependency} />
                </div>
            </div>
        </>
    )
}