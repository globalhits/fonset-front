import {useState} from "react"
import { Button, Col, Row, Tab } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific";



import "./ObjEspecificoCoop.scss"
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RequestDto } from "../../../../models/general/RequestDto";


const FormObjEspecificoCoop = () => {

    const [categoriesGeneral, setCategoriesGeneral] = useState([]);

    const [categoriesSpecifies, setCategoriesSpecifies] = useState([]);

    const [services, setServices] = useState([]);

    const [objetiveStrategies, setObjetiveStrategies] = useState([]);

    const [subOjectiveStrategies, setSubOjectiveStrategies] = useState([]);

    const [actionsObjetives, setActionsObjectives] = useState([]);

    const [programs, setPrograms] = useState([]);

    const [linesPrograms, setLinesPrograms] = useState([]);

    // INPUT

    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [service, setService] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState("");

    const [program, setProgram] = useState("");

    const [linesProgram, setLinesProgram] = useState("");

    const [actionsObjetive, setActionsObjective] = useState("");

    

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(GeneralSelector);


    const setValueByIndex = (index: keyof RequestDto, value: any) => {
        let updatedRequest: RequestDto = {
            ...data,
            [index]: value,
        };
    
        dispatch(setDataGeneral(updatedRequest));
    };

    const addItem = () => {

    }

    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-3">
                    <Row sm={12}>
                        <InputFloating label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_ESPECIFICO", value)} value={data.PROY_OBJETIVO_ESPECIFICO}  />
                    </Row>
                   <Col sm={4}>
                   <    InputFloating label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} />
                        <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_GENERAL", value)} value={data.PROY_DESCRIPCION_GENERAL}  />
                        <InputFloating label="Fecha esperada inicio*" type="date" placeholder="" className="mb-3 col-lg-13" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL", value)} value={data.PROY_MES_INICIO_GENERAL}  />
                        <InputSelected label="Categoria especifica*" options={categoriesSpecifies} onChange={(value: any) => setCategorySpecify(value)} value="" />
                        <InputSelected label="Sub tema del Obj. estrategico*" options={subOjectiveStrategies} onChange={(value: any) => setSubObjetiveStrategy(value)} value="" />
                    </Col> 
                    <Col sm={4}>
                        <InputFloating label="Indicador cuantitativo o cualitativo*" name="indicador"  type="text" placeholder="" className="mb-3 inputFloating " setValueChange={(value: string)  => setValueByIndex("PROY_INDICADOR_GENERAL", value)} value={data.PROY_INDICADOR_GENERAL} />
                        <InputFloating label="Fecha esperada final*" name="mes_final"  type="date" placeholder="" className="mb-3 col-lg-13 " setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL", value)} value={data.PROY_MES_FINAL_GENERAL} />
                        <InputSelected label="Nombre bien/Servicio*" options={services} onChange={(value: any) => setService(value)} value=""/>
                        <InputSelected label="Acciones Objs. estrategicos*" options={actionsObjetives} onChange={(value: any) => setActionsObjective(value)} value="" />
                        <InputSelected label="Lineas del programa*" options={linesPrograms} onChange={(value: any) => setLinesProgram(value)} value="" />
                    </Col>
                    <Col sm={4}>
                        <InputFloating label="Resultado esperado*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => setValueByIndex("PROY_RESULTADO_ESPERADO", value)} value={data.PROY_RESULTADO_ESPERADO} />
                        <InputSelected label="Categoria general*" options={categoriesGeneral} onChange={(value: any) => setCategoryGeneral(value)} value=""/>
                        <InputSelected label="Obj. estrategico del direccionamiento*" options={objetiveStrategies} onChange={(value: any) => setObjetiveStrategy(value)} value=""/>
                        <InputSelected label="Programa*" options={programs} onChange={(value: any) => setProgram(value)} value=""/>
                        <Button className=" col-lg-8 agregar" variant="outline-info">AGREGAR OBJETIVO ESPECIFIVO</Button>
                    </Col>
                </Row>

                

                <TableObjectiveSpecific />
            </Tab.Container >
        </div>
    )
}

export default FormObjEspecificoCoop;