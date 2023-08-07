import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";
import TextArea from "../../../atoms/area/TextArea";

export default function FormObjGeneralCoop() {

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12">
                    <InputFloating label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <InputFloating label="Fecha espera de inicio" className="mb-3 inputFloating" type="date" />
                </div>
                <div className="col-lg-3">
                    <InputFloating label="Fecha espera terminada" className="mb-3 inputFloating" type="date" />
                </div>
                <div className="col-lg-3">
                    <InputFloating label="Duracion estimada en meses" className="mb-3 inputFloating" type="number" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-16">
                    <TextArea />
                </div>
            </div>
        </div>
    )
}