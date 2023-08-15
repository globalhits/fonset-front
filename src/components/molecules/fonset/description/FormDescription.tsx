import React from "react";
import { Nav, Tab, Table } from "react-bootstrap";
import TextArea from "../../../atoms/area/TextArea";
import './FormDescription.scss'
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { FonsetSelector, setDataFonset } from "../../../../redux/states/fonset/fonset.slice";
import { RequestDto } from "../../../../models/general/RequestDto";

export default function FormDescription() {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(FonsetSelector);

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataFonset(updatedRequest));
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
                            <TextArea label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} value={data.PROY_OBJETIVO_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="obj_especifico">
                            <TextArea label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} value={data.PROY_OBJETIVO_ESPECIFICO} setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_ESPECIFICO", value)} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="poblacion_obj">
                            <TextArea label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} value={data.PROY_POBLACION_OBJETIVO} setValueChange={(value: string) => setValueByIndex("PROY_POBLACION_OBJETIVO", value)} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="bienes_servicios">
                            <TextArea label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} value={data.PROY_DESCRIPCION_BIENES_SERVICIOS} setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_BIENES_SERVICIOS", value)} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="justificacion">
                            <TextArea label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} value={data.PROY_OBJETIVO_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL", value)} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="problema">
                            <TextArea label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} value={data.PROY_OBJETIVO_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL", value)} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="observaciones">
                            <TextArea label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} value={data.PROY_OBJETIVO_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL", value)} />
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