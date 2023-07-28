import React from "react";
import InputFloating from "../../atoms/input/Input";
import InputSelected from "../../atoms/selected/InputSelected";
import CheckBox from "../../atoms/check/Check";
import { Table } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import "./FormInfoBasic.css"

export default function FormInfoBasic() {
    return (
        <div>

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        <div className="ContainerForm">
                <h5 className="title">Información basica</h5>
                <div className="Block1">
                    <CheckBox label="Tecnicas" type="checkbox" />
                    <CheckBox label="Tecnologicas" type="checkbox" />
                    <CheckBox label="Humanas" type="checkbox" />
                </div>
                <div className="Block2">
                    <InputFloating label="Entidad / dependencia responsable *" className="mb-3 inputFloating" type="text" placeholder="Escribe la dependencia responsable" />
                    <InputSelected label="Dependencia funcional responsable *" className="mb-3 inputFloating" />
                </div>

            </div>
            <div className="ContainerTables">
                <div className="Block3">
                    <div>
                        <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                            <h6>Entidad(es) Nacional(es) Involucrada(s)</h6>
                        </div>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Dependencias involucradas</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>dependencias</td>
                                    <td>accion</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="Block3">
                <div>
                        <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
                            <h6>Dependencias involucradas</h6>
                        </div>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Dependencias involucradas</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>dependencias</td>
                                    <td>accion</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>

                </div>
                <div className="Block3">
                <div>
                <h6>Entidad(es) Nacional(es) Involucrada(s)</h6>
                        <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1, display:"flex" }}>
                        <CheckBox label="Nacional" type="checkbox" />
                        <CheckBox label="Focalizada" type="checkbox" />
                        </div>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Departamentos</th>
                                    <th>Municipios</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>dependencias</td>
                                    <td>dependencias</td>
                                    <td>accion</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>  

                </div>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>


            

        </div>

    )
}