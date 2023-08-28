import React from "react";
import { Nav, Tab, Table } from "react-bootstrap";
import TextArea from "../../../atoms/area/TextArea";
import './FormDescription.scss'
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RequestDto } from "../../../../models/general/RequestDto";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";

export default function FormDescription() {

    const dispatch = useAppDispatch();

    const { data, errorInputs } = useAppSelector(GeneralSelector);

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
                    </Nav>

                    <Tab.Content className="width100">
                        <Tab.Pane eventKey="obj_general" >
                            <TextArea name="PROY_OBJETIVO_GENERAL" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} isInvalid={!data.PROY_OBJETIVO_GENERAL && errorInputs} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="obj_especifico">
                            <TextArea name="PROY_OBJETIVO_ESPECIFICO" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_ESPECIFICO", value)} value={data.PROY_OBJETIVO_ESPECIFICO} isInvalid={!data.PROY_OBJETIVO_ESPECIFICO && errorInputs} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="poblacion_obj">
                            <TextArea name="PROY_POBLACION_OBJETIVO" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_POBLACION_OBJETIVO", value)} value={data.PROY_POBLACION_OBJETIVO} isInvalid={!data.PROY_POBLACION_OBJETIVO && errorInputs} cols={50} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="bienes_servicios">
                            <TextArea name="PROY_DESCRIPCION_BIENES_SERVICIOS" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_BIENES_SERVICIOS", value)} value={data.PROY_DESCRIPCION_BIENES_SERVICIOS} isInvalid={!data.PROY_DESCRIPCION_BIENES_SERVICIOS && errorInputs} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="justificacion">
                            <TextArea name="PROY_JUSTIFICACION" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION", value)} value={data.PROY_JUSTIFICACION} isInvalid={!data.PROY_JUSTIFICACION && errorInputs} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="problema">
                            <TextArea name="PROY_DESCRIPCION_PROBLEMA" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_PROBLEMA", value)} value={data.PROY_DESCRIPCION_PROBLEMA} isInvalid={!data.PROY_DESCRIPCION_PROBLEMA && errorInputs} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="observaciones">
                            <TextArea name="PROY_OBSERVACIONES" label="Digite la descripción del objetivo..." setValueChange={(value: string) => setValueByIndex("PROY_OBSERVACIONES", value)} value={data.PROY_OBSERVACIONES} isInvalid={!data.PROY_OBSERVACIONES && errorInputs} />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>

        </div>

    )
}