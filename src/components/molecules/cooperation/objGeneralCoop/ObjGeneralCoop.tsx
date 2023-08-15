import React from "react";
import InputFloating from "../../../atoms/input/Input";
import TextArea from "../../../atoms/area/TextArea";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { InvertionSelector, setDataInvertion } from "../../../../redux/states/invertion/invertion.slice";
import { RequestDto } from "../../../../models/general/RequestDto";

export default function FormObjGeneralCoop() {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(InvertionSelector)

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataInvertion(updatedRequest));
    }

    return (
        <>
            <div className="row mt-2">
                <div className="col-lg-12">
                    <InputFloating label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <InputFloating label="Fecha espera de inicio" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputFloating label="Fecha espera terminada" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputFloating label="Duracion estimada en meses" className="mb-3 inputFloating" type="number" setValueChange={(value: string) => { }} value="" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-12">
                    <TextArea label="Escriba aqui el objetivo general del proyecto" value={data.PROY_OBJETIVO_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL", value)} />
                </div>
            </div>
        </>
    )
}