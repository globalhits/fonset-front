import React from "react";
import InputFloating from "../../../atoms/input/Input";
import TextArea from "../../../atoms/area/TextArea";
import { RequestCooperativeDto } from "../../../../models/cooperative/RequestCooperativeDto";

interface FormObjGeneralCoopInterface {
    formData: RequestCooperativeDto,
    setFormData: Function
}
export default function FormObjGeneralCoop({ formData, setFormData }) {
    
    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestCooperativeDto = {};

        updatedRequest = {
            ...formData,
            [index]: value
        }

        setFormData(updatedRequest);
    }

    return (
        <>
            <div className="row mt-2">
                <div className="col-lg-12">
                    <InputFloating name="PRCI_JUSTIFICACION" label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <InputFloating name="PRCI_FECHA_ESPERADA_INICIO" label="Fecha espera de inicio" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputFloating  name="PRCI_FECHA_ESPERADA_TERMINADA" label="Fecha espera terminada" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputFloating  name="PRCI_DURACION_ESTIMADA_MESES" label="Duracion estimada en meses" className="mb-3 inputFloating" type="number" setValueChange={(value: string) => { }} value="" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-16">
                    <TextArea name= "PRCI_OBJETIVO_GENERAL" label="Escriba aqui el objetivo general del proyecto" />
                </div>
            </div>
        </>
    )
}