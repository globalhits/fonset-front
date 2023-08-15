
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks"
import { InvertionSelector, setDataInvertion } from "../../../../../redux/states/invertion/invertion.slice"
import Buttons from "../../../../atoms/button/Buttons"
import InputSelected from "../../../../atoms/selected/InputSelected"
import { GeneralObjective } from "../generalObjective/GeneralObjective"
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific"
import { RequestDto } from "../../../../../models/general/RequestDto";

export const GeneralSpecific = () => {

    const [categoriesGeneral, setCategoriesGeneral] = useState([]);

    const [categoriesSpecifies, setCategoriesSpecifies] = useState([]);

    const [services, setServices] = useState([]);

    const [objetiveStrategies, setObjetiveStrategies] = useState([]);

    const [subOjectiveStrategies, setSubOjectiveStrategies] = useState([]);

    const [actionsObjetives, setActionsObjectives] = useState([]);

    // INPUT

    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [service, setService] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [programs, setPrograms] = useState([]);

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(InvertionSelector);



    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataInvertion(updatedRequest));
    }

    const addItem = () => {

    }

    return (
        <>
            <GeneralObjective type="specific" />
            <hr />
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Categoria general / eje Tematico" options={categoriesGeneral} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Categoria Especifica" options={categoriesSpecifies} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Nombre Bien / Servicio" options={services} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Objetivo estratégico direccionamiento" options={objetiveStrategies} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Subtema del objetivo estratégico" options={subOjectiveStrategies} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Acciones Objetivo estratégico" options={actionsObjetives} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Programa" options={programs} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Linea del programa" options={programs} onChange={(value: any) => setValueByIndex("", value)} value="" />
                </div>
                <div className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar objetivo especifico" classStyle="mt-4 " onClick={() => { }} />
                </div>
            </div>
            <TableObjectiveSpecific />
        </>
    )
}