import React from "react";

import './index.scss'
import { Tab, Table, Tabs } from "react-bootstrap";
import InputFloating from "./../../atoms/input/Input";

export default function InfoProyect() {

    return (
        <div className="container">
            <Tabs
                defaultActiveKey="project"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="project" title="PROYECTO">
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <InputFloating label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" placeholder="Escriba el objetivo general del proyecto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <InputFloating label="Población afectada por el problema" className="mb-3 inputFloating" type="text" placeholder="Digite la descripción" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <InputFloating label="Población objeto de la intervención" className="mb-3 inputFloating" type="text" placeholder="Digite el indicador" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <InputFloating label="Caracteristicas demograficas de la población objetivo" className="mb-3 inputFloating" type="text" placeholder="Digite el indicador" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12">
                            <Table>

                            </Table>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="objetive" title="OBJETIVO GENERAL">
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <InputFloating label="Objetivo general del proyecto" className="mb-3 inputFloating" type="text" placeholder="Escriba el objetivo general del proyecto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" placeholder="Digite la descripción" />
                        </div>
                        <div className="col-lg-6">
                            <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" placeholder="Digite el indicador" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <InputFloating label="Linea base" className="mb-3 inputFloating" type="text" placeholder="Digite la descripción" />
                        </div>
                        <div className="col-lg-3">
                            <InputFloating label="Meta" className="mb-3 inputFloating" type="text" placeholder="Digite la descripción" />
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}