import React, { useState, useEffect } from "react";
import {Container, Col, Row } from "react-bootstrap";
import "./index.scss";

// --- Components Libraries ---
// import { Table } from 'react-bootstrap';

// --- Components ---
import CheckBox from "../../../atoms/check/Check";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";

import { TypeProjectDto } from "../../../../models/general/TypeProjectDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { DependencySelector, fetchApiDependencies } from "../../../../redux/states/generals/dependency.slice";
import { RequestDto } from "../../../../models/general/RequestDto";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";
import Entities from "../../Invertion/infoEntities";
import helper from "../../../../utils/helper";

interface infoBasicInterface{
    type?: string,
}

const InfoBasic: React.FC<infoBasicInterface> = ({type}) => {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(GeneralSelector)

    const { dependencies } = useAppSelector(DependencySelector);

    useEffect(() => {
        dispatch(fetchApiDependencies()); // Disparar la acción para obtener los datos
    }, [dispatch]);

    const [checkedTecnica, setCheckedTecnica] = useState(false);

    const [checkedTecnologia, setCheckedTecnologia] = useState(false);

    const [checkedHumanas, setCheckedHumanas] = useState(false);

    const checkInputs = () => {
        if (data.PROY_TIPO !== null) {
            data.PROY_TIPO?.forEach(item => {
                if (item.DESCRIPCION == "tecnicas") {
                    setCheckedTecnica(true);
                } else {
                    setCheckedTecnica(false);
                }
                if (item.DESCRIPCION == "tecnologias") {
                    setCheckedTecnologia(true)
                } else {
                    setCheckedTecnologia(false);
                }
                if (item.DESCRIPCION == "humanas") {
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

        let updatedRequest: RequestDto = {};

        let listTipoProject = data.PROY_TIPO ? data.PROY_TIPO : [];
        if (checked) {
            // Elemento no existe, agregarlo al array
            const newItem = [...listTipoProject, { INDEX: helper.getRandomInt(), ID: null, DESCRIPCION: value }];
            updatedRequest = {
                ...data,
                PROY_TIPO: newItem
            };

        } else {
            // Eliminar elemento del array
            let newTypes = listTipoProject.filter(item => item.DESCRIPCION != value);
            updatedRequest = {
                ...data,
                PROY_TIPO: newTypes
            }
        }

        dispatch(setDataGeneral(updatedRequest));

    }

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    return (
        <>
            <Row className="row mt-4 p-2">
                <Col className="col-lg-3">
                    <Container className="ContainerForm">
                        <h5 className="title">Tipo de proyecto <span className="text-red">*</span></h5>
                        <Col className="mt-3">
                            <CheckBox name={"tecnicas"} label="Tecnicas" type="checkbox" value="tecnicas" setValueChange={(e: any) => setTypeProject("tecnicas", e)} checked={checkedTecnica} />
                            <CheckBox name={"tecnologias"} label="Tecnologicas" type="checkbox" value="tecnologias" setValueChange={(e: any) => setTypeProject("tecnologias", e)} checked={checkedTecnologia} />
                            <CheckBox name={"humanas"} label="Humanas" type="checkbox" value="humanas" setValueChange={(e: any) => setTypeProject("humanas", e)} checked={checkedHumanas} />
                        </Col>
                    </Container>
                </Col>
                <Col className="col-lg-9">
                    {type !== "cooperative" ? (
                        <>
                            <InputFloating name="dependencia-responsable" label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" setValueChange={(value: any) => setValueByIndex("PROY_DEPENDENCIA_RESPONSABLE", value)} value={data.PROY_DEPENDENCIA_RESPONSABLE} />
                            <InputSelected name="dependencia-funcional-responsable" label="Dependencia funcional responsable *" className="mt-2 mb-3 inputFloating" options={dependencies} onChange={(value: any) => setValueByIndex("PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE", value)} value={data.PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE} />
                        </>
                    ) : (
                        <InputSelected name="dependencia-funcional-responsable" label="Dependencia funcional responsable *" className="mt-2 mb-3 inputFloating" options={dependencies} onChange={(value: any) => setValueByIndex("PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE", value)} value={data.PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE} />
                    )} 
                    </Col>
            </Row>
            <Entities/>
        </>
    )
}

export default InfoBasic;