import React from "react";
import { Nav, Tab, Table } from "react-bootstrap";
import TextArea from "../../../atoms/area/TextArea";
import './FormDescription.scss'
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RequestDto } from "../../../../models/general/RequestDto";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";

export default function FormDescription() { 

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

    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="obj_general">
                <div className="content-pills">
                    <Nav variant="pills" className="flex-column border-nav-pills">
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="obj_general">OBJ. GENERAL</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="obj_especifico">OBJ. ESPECIFICO</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="poblacion_obj">POBLACION OBJETIVO</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="bienes_servicios">DESC. BIENES Y SERVICIOS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="justificacion">JUSTIFICACION</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="problema" className="w-auto text-nowrap">DESC. DEL PROBLEMA Y ANALISIS DE CAUSA Y EFECTO</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="observaciones">OBSERVACIONES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="col-lg-16">
                            <Nav.Link eventKey="documentos">DOCUMENTOS ANEXOS</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content className="width100">
                        <Tab.Pane eventKey="obj_general" >
                            <TextArea name="PROY_OBJETIVO_GENERAL" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="obj_especifico">
                            <TextArea name="PROY_OBJETIVO_ESPECIFICO" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_ESPECIFICO", value)} value={data.PROY_OBJETIVO_ESPECIFICO}  />
                        </Tab.Pane>

                        <Tab.Pane eventKey="poblacion_obj">
                            <TextArea name="PROY_POBLACION_OBJETIVO" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_POBLACION_OBJETIVO", value)} value={data.PROY_POBLACION_OBJETIVO}  />
                        </Tab.Pane>

                        <Tab.Pane eventKey="bienes_servicios">
                            <TextArea name="PROY_DESCRIPCION_BIENES_SERVICIOS" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_BIENES_SERVICIOS", value)} value={data.PROY_DESCRIPCION_BIENES_SERVICIOS}  />
                        </Tab.Pane>

                        <Tab.Pane eventKey="justificacion">
                            <TextArea name="PROY_DESCRIPCION_PROBLEMA" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_PROBLEMA", value)} value={data.PROY_DESCRIPCION_PROBLEMA}  />
                        </Tab.Pane>

                        <Tab.Pane eventKey="problema">
                            <TextArea name="PROY_PROBLEMA" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_PROBLEMA", value)} value={data.PROY_PROBLEMA} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="observaciones">
                            <TextArea name="PROY_OBSERVACIONES" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_OBSERVACIONES", value)} value={data.PROY_OBSERVACIONES}  />
                        </Tab.Pane>

                        <Tab.Pane eventKey="documentos">
                            <Table className="table table-bordered table-condensed table-stripe">
                                <thead>
                                    <tr>
                                        <th className="text-center">Descripcion</th>
                                        <th className="text-center">Archivo</th>
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
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>

        </div>

    )
}