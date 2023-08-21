import React, {useState} from "react";
import { Col, Row} from "react-bootstrap";
import Swal from 'sweetalert2';

import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import Buttons from "../../../atoms/button/Buttons";
import TableListGoods from "./table/TableListGoods";
import "./FormGoods.scss"

import { RequestDto } from "../../../../models/general/RequestDto";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";


export default function FormGoods() {

    const showConfirmationAlert = () => {
        Swal.fire({
            title: 'Una pregunta',
            text: '¿Seguro que no desea continuar?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar',
            cancelButtonText: 'Si, seguro',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes agregar el código para cerrar la ventana o realizar alguna acción adicional
                console.log('La ventana se cerrará');
            }
        });
    };

    const [categoriesGeneral, setCategoriesGeneral] = useState([]);

    const [categoriesSpecifies, setCategoriesSpecifies] = useState([]);

    const [services, setServices] = useState([]);

    const [units, setUnits] = useState([]);

    const [subUnits, setSubUnits] = useState([]);

    const [presentations, setPresentations] = useState([]);

 
    const [objetiveStrategies, setObjetiveStrategies] = useState([]);

    const [subOjectiveStrategies, setSubOjectiveStrategies] = useState([]);

    const [actionsObjetives, setActionsObjectives] = useState([]);

    const [programs, setPrograms] = useState([]);

    const [linesPrograms, setLinesPrograms] = useState([]);

    // INPUT

    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [service, setService] = useState("");

    const [unit, setUnit] = useState("");

    const [subUnit, setSubUnit] = useState("");

    const [presentation, SetPresentation] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState("");

    const [program, setProgram] = useState("");

    const [linesProgram, setLinesProgram] = useState("");

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

    const addItem = () => {

    }

    return (
        <>
            <Row>
                <Col lg="4">
                    <InputSelected label="Categoria general*" options={categoriesGeneral} onChange={(value: any) => setCategoryGeneral(value)} value="" />
                </Col>
                <Col lg="4">
                    <InputSelected label="Categoria especifica*" options={categoriesSpecifies} onChange={(value: any) => setCategorySpecify(value)} value=""/>
                </Col>
                <Col lg="4">
                    <InputSelected label="Nombre bien/Servicio*" options={services} onChange={(value: any) => setService(value)} value="" />
                </Col>
            </Row>
            <Row>
                <Col lg="2">
                    <InputSelected label="Unidad de medida*" options={units} onChange={(value: any) => setUnits(value)} value="" />

                </Col>
                <Col lg="2">
                    <InputSelected label="Sub unidad de medida*" options={subUnits} onChange={(value: any) => setSubUnit(value)} value="" />
                </Col>
                <Col lg="4">
                    <InputSelected label="Presentacion*" options={presentations} onChange={(value: any) => SetPresentation(value)} value=""/>
                </Col>
                <Col lg="2">
                    <InputFloating name="PROY_VALOR_UNITARIO_IVA" label="Valor unit con iva*" className="mb-3 inputFloating" type="string" setValueChange={(value: string) => setValueByIndex("PROY_VALOR_UNITARIO_IVA", value)} value={data.PROY_VALOR_UNITARIO_IVA} />
                </Col>
                <Col lg="2">
                    <InputFloating name="PROY_CANTIDAD" label="Cantidad*" className="mb-3 inputFloating" type="number" setValueChange={(value: number) => setValueByIndex("PROY_CANTIDAD", value)} value={data.PROY_CANTIDAD} />
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <InputSelected label="Obj. estrategico del direccionamiento*" options={objetiveStrategies} onChange={(value: any) => setObjetiveStrategy(value)} value=""/>
                </Col>
                <Col lg="4">
                    <InputSelected label="Sub tema del Obj. estrategico*" options={subOjectiveStrategies} onChange={(value: any) => setSubObjetiveStrategy(value)} value=""/>

                </Col>
                <Col lg="4">
                    <InputSelected label="Acciones Objs. estrategicos*" options={actionsObjetives} onChange={(value: any) => setActionsObjectives(value)} value=""/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={4}>
                    <InputSelected label="Programa*" options={programs} onChange={(value: any) => setProgram(value)} value="" />
                </Col>
                <Col sm={4}>
                    <InputSelected label="Lineas del programa*" options={linesPrograms} onChange={(value: any) => setLinesProgram(value)} value="" />
                </Col>

                
                <Col className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar bien/servicio" classStyle="mt-4 " onClick={() => { }} />
                </Col>
            </Row>
            <hr />
            <TableListGoods />
        </>
    )
}