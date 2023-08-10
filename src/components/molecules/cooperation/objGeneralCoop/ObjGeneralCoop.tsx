import React from "react";
import InputFloating from "../../../atoms/input/Input";
import TextArea from "../../../atoms/area/TextArea";

export default function FormObjGeneralCoop() {

    return (
        <div className="container">
            <div className="row mt-4">
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
            <div className="row">
                <div className="col-lg-16">
                    <TextArea label="Escriba aqui el objetivo general del proyecto" />
                </div>
            </div>
        </div>
    )
}