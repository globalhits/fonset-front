import React, { useState } from "react";

import "./index.scss";

// --- Components Libraries ---
import { Table } from 'react-bootstrap';

// --- Components ---
import CheckBox from "../../../atoms/check/Check";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import Entities from "../infoEntities";

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
            <div className="row mt-4 p-2">
                <div className="col-lg-3">
                    <div className="ContainerForm">
                        <h5 className="title">Tipo de proyecto</h5>
                        <div className="mt-3">
                            <CheckBox label="Tecnicas" type="checkbox" />
                            <CheckBox label="Tecnologicas" type="checkbox" />
                            <CheckBox label="Humanas" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <InputFloating label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Escribe la dependencia responsable" />
                    <InputSelected label="Dependencia funcional responsable *" className="mt-2 mb-3 inputFloating" options={listDependency} />
                </div>
            </div>
            <Entities />
        </>
    )
}