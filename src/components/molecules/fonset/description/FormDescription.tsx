import React from "react";
import { Col, Nav, Row, Tab, Table } from "react-bootstrap";
import TextArea from "../../../atoms/area/TextArea";
import './FormDescription.scss'

import { RequestFonsetDto } from "../../../../models/fonset/RequestFonsetDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import { InvertionSelector, setDataInvertion } from "../../../../redux/states/invertion/invertion.slice";


interface FormDescriptionInterface {
    formData: RequestFonsetDto,
    setFormData: Function
}

const FormDescription = ({ formData, setFormData }: FormDescriptionInterface) => {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(InvertionSelector)

    const setValueByIndex = (index: keyof RequestFonsetDto, value: any) => {
        let updatedRequest: RequestFonsetDto = {
            ...data,
            [index]: value,
        };
    
        dispatch(setDataInvertion(updatedRequest));
    };
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
                            <TextArea name="PRFO_OBJETIVO_GENERAL" label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} setValueChange={(value: string) => setValueByIndex("PRFO_OBJETIVO_GENERAL", value)} value={""} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="obj_especifico">
                            <TextArea name="PRFO_OBJETIVOS_ESPECIFICOS" label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} setValueChange={(value: string) => setValueByIndex("PRFO_OBJETIVOS_ESPECIFICOS", value)} value={""} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="poblacion_obj">
                            <TextArea name="PRFO_POBLACION_OBJETIVO" label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} setValueChange={(value: string) => setValueByIndex("PRFO_POBLACION_OBJETIVO", value)} value={""} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="bienes_servicios">
                            <TextArea name="PRFO_DESCRIPCION_BIENES_SERVICIOS" label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} setValueChange={(value: string) => setValueByIndex("PRFO_DESCRIPCION_BIENES_SERVICIOS", value)} value={""} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="justificacion">
                            <TextArea name="PRFO_JUSTIFICACION" label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} setValueChange={(value: string) => setValueByIndex("PRFO_JUSTIFICACION", value)} value={""} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="problema">
                            <TextArea name="PRFO_DESCRIPCION_PROBLEMA" label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} setValueChange={(value: string) => setValueByIndex("PRFO_DESCRIPCION_PROBLEMA", value)} value={""} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="observaciones">
                            <TextArea name="PRFO_OBSERVACIONES" label="Digite la descripción del objetivo..." rows={12} cols={20} styles={{ height: "auto" }} setValueChange={(value: string) => setValueByIndex("PRFO_OBSERVACIONES", value)} value={""} />
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

export default FormDescription