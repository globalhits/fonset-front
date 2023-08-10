import React, { useState } from "react";

import "./index.scss";

// --- Components Libraries ---
// import { Table } from 'react-bootstrap';

// --- Components ---
import CheckBox from "../../../atoms/check/Check";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import Entities from "../infoEntities";
import { RequestInvertionDto } from "../../../../models/invertion/RequestInvertionDto";

interface InfoBasicInterface {
    formData: RequestInvertionDto
}

const InfoBasic: React.FC<InfoBasicInterface> = ({ formData }) => {

    const [listDependency, setListDependency] = useState([
        {
            id: "",
            text: "Seleccione..."
        }, {
            id: 1,
            text: "ejemplo de dependencia"
        }
    ]);

    const setDependency = (value: string) => {
        formData.PROY_DEPENDENCIA_RESPONSABLE = value;
    }

    const setTypeProject = (value: string) => {
        let data = formData.PROY_TIPO;
        let itemFind = data.find(item => item.description == value);
        if (!itemFind) {
            data.push({ id: null, description: value })
        }
    }

    return (
        <>
            <div className="row mt-4 p-2">
                <div className="col-lg-3">
                    <div className="ContainerForm">
                        <h5 className="title">Tipo de proyecto</h5>
                        <div className="mt-3">
                            <CheckBox label="Tecnicas" type="checkbox" value="tecnicas" setValueChange={(value: string) => setTypeProject(value)} />
                            <CheckBox label="Tecnologicas" type="checkbox" value="tecnologias" setValueChange={(value: string) => setTypeProject(value)} />
                            <CheckBox label="Humanas" type="checkbox" value="humanas" setValueChange={(value: string) => setTypeProject(value)} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <InputFloating name="dependencia-responsable" label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Escribe la dependencia responsable" setValueChange={(value: string) => setDependency(value)} />
                    <InputSelected label="Dependencia funcional responsable *" className="mt-2 mb-3 inputFloating" options={listDependency} />
                </div>
            </div>
            <Entities />
        </>
    )
}

export default InfoBasic;