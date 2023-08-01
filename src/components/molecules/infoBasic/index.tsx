import React, { useState } from "react";

import "./index.scss";

// --- Components Libraries ---
import { Table } from 'react-bootstrap';

// --- Components ---
import CheckBox from "../../atoms/check/Check";
import InputFloating from "../../atoms/input/Input";
import InputSelected from "../../atoms/selected/InputSelected";

export default function InfoBasic() {

    const [listDependency, setListDependency] = useState([
        {
            id: "",
            text: "Seleccione..."
        }, {
            id: 1,
            text: "ejemplo de dependencia"
        }
    ]);

    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="ContainerForm">
                        <h5 className="title">Tipo de proyecto</h5>
                        <div className="ml-5 mt-3">
                            <CheckBox label="Tecnicas" type="checkbox" />
                            <CheckBox label="Tecnologicas" type="checkbox" />
                            <CheckBox label="Humanas" type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <InputFloating label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Escribe la dependencia responsable" />
                    <InputSelected label="Dependencia funcional responsable *" className="mb-3 inputFloating" options={listDependency} />
                </div>
            </div>
            <hr />
            <div className="row mt-5 mb-4">
                <div className="col-lg-12">
                    <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                        <h6>Entidad(es) Nacional(es) Involucrada(s)</h6>
                    </div>
                    <Table className="table table-bordered table-condensed table-stripe">
                        <thead>
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-12">
                    <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                        <h6>Dependencias involucradas</h6>
                    </div>
                    <Table className="table table-bordered table-condensed table-stripe">
                        <thead>
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-12">
                    <h6>Entidad(es) Nacional(es) Involucrada(s)</h6>
                    <CheckBox label="Nacional" type="checkbox" className="mr-3 mt-3 mb-3" />
                    <CheckBox label="Focalizada" type="checkbox" className="mr-3 mt-3 mb-3" />
                    <Table className="table table-bordered table-condensed table-stripe">
                        <thead>
                            <tr>
                                <th className="text-center">Departamentos</th>
                                <th className="text-center">Municipios</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}