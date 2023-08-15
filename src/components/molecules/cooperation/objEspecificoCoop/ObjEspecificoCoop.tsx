import {useState} from "react"
import { Button, Col, Row, Tab } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific";

import { RequestCooperativeDto } from "../../../../models/cooperative/RequestCooperativeDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { CooperativeSelector, setDataCooperative } from "../../../../redux/states/cooperation/cooperation.slice";

import "./ObjEspecificoCoop.scss"

interface ObjEspecificoCoopInterface { 
    formData: RequestCooperativeDto,
    setFormData: Function
}

const FormObjEspecificoCoop = ({ formData, setFormData }: ObjEspecificoCoopInterface) => {

    const [categoriesGeneral, setCategoriesGeneral] = useState([]);

    const [categoriesSpecifies, setCategoriesSpecifies] = useState([]);

    const [services, setServices] = useState([]);

    const [objetiveStrategies, setObjetiveStrategies] = useState([]);

    const [subOjectiveStrategies, setSubOjectiveStrategies] = useState([]);

    const [actionsObjetives, setActionsObjectives] = useState([]);

    // INPUT

    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [service, setService] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [programs, setPrograms] = useState([]);

    

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(CooperativeSelector);


    const setValueByIndex = (index: keyof RequestCooperativeDto, value: any) => {
        let updatedRequest: RequestCooperativeDto = {
            ...data,
            [index]: value,
        };
    
        dispatch(setDataCooperative(updatedRequest));
    };

    const addItem = () => {

    }

    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-3">
                    <Row sm={12}>
                        <InputFloating name="PRCI_JUSTIFICACION" label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PRCI_JUSTIFICACION", value)} value={data.PRCI_JUSTIFICACION}  />
                    </Row>
                    {/* <Col sm={4}>
                        <InputFloating name="descripción" label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => setValueByIndex("descripción", value)} value={data.descripción}  />
                        <InputFloating name="mes_inicial" label="Fecha esperada inicio*" type="date" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => setValueByIndex("mes_inicial", value)} value={data.mes_inicial}  />
                        <InputSelected label="Categoria especifica*" className="mb-3 inputFloating" options={categoriesSpecifies} onChange={(value: any) => setValueByIndex(categoriesSpecifies, value)} value="" />
                        <InputSelected label="Sub tema del Obj. estrategico*" className="mb-3 inputFloating" options={subOjectiveStrategies} onChange={(value: any) => setValueByIndex(subtema_objetivo_estrategico, value)} value="" />
                        <InputSelected label="Lineas del programa*" className="mb-3 inputFloating InputSeleted" options={programs} onChange={(value: any) => setValueByIndex("", value)} value="" />
                    </Col> 
                    <Col sm={4}>
                        <InputFloating name="indicador" label="Indicador cuantitativo o cualitativo*" type="text" placeholder="" className="mb-3 inputFloating " setValueChange={(value: string) => { }} value="" />
                        <InputFloating name="mes_final" label="Fecha esperada final*" type="date" placeholder="" className="mb-3 col-lg-13 " setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Nombre bien/Servicio*" className="mb-3 inputFloating" options={services} onChange={(value: any) => setValueByIndex("", value)} value="" />
                        <InputSelected label="Acciones Objs. estrategicos*" className="mb-3 inputFloating InputSeleted" options={actionsObjetives} onChange={(value: any) => setValueByIndex("", value)} value="" />
                    </Col>
                    <Col sm={4}>
                        <InputFloating name="PRCI_JUSTIFICACION" label="Resultado esperado*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                        <InputSelected label="Categoria general*" className="mb-3 inputFloating" options={categoriesGeneral} onChange={(value: any)  => setValueByIndex("", value)} value="" />
                        <InputSelected label="Obj. estrategico del direccionamiento*" className="mb-3 inputFloating" options={objetiveStrategies} onChange={(value: any)  => setValueByIndex("", value)} value="" />
                        <InputSelected label="Programa*" className="mb-3 inputFloating" options={programs} onChange={(value: any) => setValueByIndex("", value)} value="" />
                        <Button className=" col-lg-8 agregar" variant="outline-info">AGREGAR OBJETIVO ESPECIFIVO</Button>
                    </Col>*/}
                </Row>

                <TableObjectiveSpecific />
            </Tab.Container >
        </div>
    )
}

export default FormObjEspecificoCoop;