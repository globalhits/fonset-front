import React, { useState, useEffect } from "react";

import "./index.scss";

// --- Components Libraries ---
// import { Table } from 'react-bootstrap';

// --- Components ---
import CheckBox from "../../../atoms/check/Check";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import Entities from "../infoEntities";
import { RequestInvertionDto } from "../../../../models/invertion/RequestInvertionDto";
import { TypeProjectDto } from "../../../../models/invertion/TypeProjectDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { DependencySelector, fetchApiDependencies } from "../../../../redux/states/generals/dependency.slice";
import { log } from "console";

interface InfoBasicInterface {
    formData: RequestInvertionDto;
    setFormData: Function;
}

const InfoBasic: React.FC<InfoBasicInterface> = ({ formData, setFormData }) => {

    const dispatch = useAppDispatch();

    const { dependencies } = useAppSelector(DependencySelector);

    useEffect(() => {
        dispatch(fetchApiDependencies()); // Disparar la acción para obtener los datos
    }, [dispatch]);

    const [checkedTecnica, setCheckedTecnica] = useState(false);

    const [checkedTecnologia, setCheckedTecnologia] = useState(false);

    const [checkedHumanas, setCheckedHumanas] = useState(false);

    const [listDependency, setListDependency] = useState(dependencies);

    const checkInputs = () => {
        if (formData.PROY_TIPO !== null) {
            formData.PROY_TIPO?.forEach(item => {
                if (item.description == "tecnicas") {
                    setCheckedTecnica(true);
                } else {
                    setCheckedTecnica(false);
                }
                if (item.description == "tecnologias") {
                    setCheckedTecnologia(true)
                } else {
                    setCheckedTecnologia(false);
                }
                if (item.description == "humanas") {
                    setCheckedHumanas(true);
                } else {
                    setCheckedHumanas(false);
                }
            });
        }
    }

    useEffect(() => {
        checkInputs();
    }, [])

    const setTypeProject = (index: string, e: any) => {
        let value = e.target.value;
        let checked = e.target.checked;

        if (value == "tecnicas") {
            setCheckedTecnica(checked);
        }
        if (value == "tecnologias") {
            setCheckedTecnologia(checked)
        }
        if (value == "humanas") {
            setCheckedHumanas(checked);
        }

        let updatedRequest: RequestInvertionDto = {};

        let listTipoProject = formData.PROY_TIPO ? formData.PROY_TIPO : [];
        if (checked) {
            // Elemento no existe, agregarlo al array
            const newItem = [...listTipoProject, { id: "", description: value }];
            updatedRequest = {
                ...formData,
                PROY_TIPO: newItem,
            };
        } else {
            // Eliminar elemento del array
            let newTypes = listTipoProject.filter(item => item.description != value);
            updatedRequest = {
                ...formData,
                PROY_TIPO: newTypes
            }
        }

        setFormData(updatedRequest);

        console.log("formdata", formData);

    }

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestInvertionDto = {};

        updatedRequest = {
            ...formData,
            [index]: value
        }

        setFormData(updatedRequest);
    }

    return (
        <>
            <div className="row mt-4 p-2">
                <div className="col-lg-3">
                    <div className="ContainerForm">
                        <h5 className="title">Tipo de proyecto</h5>
                        <div className="mt-3">
                            <CheckBox name={"tecnicas"} label="Tecnicas" type="checkbox" value="tecnicas" setValueChange={(e: any) => setTypeProject("tecnicas", e)} checked={checkedTecnica} />
                            <CheckBox name={"tecnologias"} label="Tecnologicas" type="checkbox" value="tecnologias" setValueChange={(e: any) => setTypeProject("tecnologias", e)} checked={checkedTecnologia} />
                            <CheckBox name={"humanas"} label="Humanas" type="checkbox" value="humanas" setValueChange={(e: any) => setTypeProject("humanas", e)} checked={checkedHumanas} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <InputFloating name="dependencia-responsable" label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" setValueChange={(value: any) => setValueByIndex("PROY_DEPENDENCIA_RESPONSABLE", value)} value={formData.PROY_DEPENDENCIA_RESPONSABLE} />
                    <InputSelected name="dependencia-funcional-responsable" label="Dependencia funcional responsable *" className="mt-2 mb-3 inputFloating" options={dependencies} onChange={(value: any) => setValueByIndex("PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE", value)} value={formData.PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE} />
                </div>
            </div>
            <Entities />
        </>
    )
}

export default InfoBasic;