
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks"
import Buttons from "../../../../atoms/button/Buttons"
import InputSelected from "../../../../atoms/selected/InputSelected"
import { GeneralObjective } from "../generalObjective/GeneralObjective"
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific"
import { RequestDto } from "../../../../../models/general/RequestDto";
import { GeneralSelector, setDataGeneral } from "../../../../../redux/states/generals/general.slice";

interface GeneralSpecificInterface {
    type?: string
}

export const GeneralSpecific = ({ type }: GeneralSpecificInterface) => {

    const [categoriesGeneral, setCategoriesGeneral] = useState([]);

    const [categoriesSpecifies, setCategoriesSpecifies] = useState([]);

    const [services, setServices] = useState([]);

    const [objetiveStrategies, setObjetiveStrategies] = useState([]);

    const [subOjectiveStrategies, setSubOjectiveStrategies] = useState([]);

    const [actionsObjetives, setActionsObjectives] = useState([]);

    const [programs, setPrograms] = useState([]);

    const [linesPrograms, setLinesPrograms] = useState([]);

    // INPUT

    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [service, setService] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState("");

    const [program, setProgram] = useState("");

    const [linesProgram, setLinesProgram] = useState("");

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(GeneralSelector);


    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    const addItem = () => {

    }

    return (
        <>
            <GeneralObjective type={type} isSpecify={true} />
            <hr />
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Categoria general / eje Tematico" options={categoriesGeneral} onChange={(value: any) => setCategoryGeneral(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Categoria Especifica" options={categoriesSpecifies} onChange={(value: any) => setCategorySpecify(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Nombre Bien / Servicio" options={services} onChange={(value: any) => setService(value)} value="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Objetivo estratégico direccionamiento" options={objetiveStrategies} onChange={(value: any) => setObjetiveStrategy(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Subtema del objetivo estratégico" options={subOjectiveStrategies} onChange={(value: any) => setSubObjetiveStrategy(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Acciones Objetivo estratégico" options={actionsObjetives} onChange={(value: any) => setActionsObjectives(value)} value="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Programa" options={programs} onChange={(value: any) => setProgram(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Lineas del programa" options={linesPrograms} onChange={(value: any) => setLinesProgram(value)} value="" />
                </div>
                <div className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar objetivo especifico" classStyle="mt-4 " onClick={() => { }} />
                </div>
            </div>
            <TableObjectiveSpecific />
        </>
    )
}