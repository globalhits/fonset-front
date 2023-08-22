import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Swal from 'sweetalert2';

import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import Buttons from "../../../atoms/button/Buttons";
import TableListGoods from "./table/TableListGoods";
import "./FormGoods.scss"

import { RequestDto } from "../../../../models/general/RequestDto";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { GeneralSelector, setDataGeneral, addGoods } from "../../../../redux/states/generals/general.slice";
import { GoodsDto } from "../../../../models/general/GoodDto";
import helper from "../../../../utils/helper";


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

    const [valueUnitary, setValueUnitary] = useState("");

    const [count, setCount] = useState("");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState("");

    const [program, setProgram] = useState("");

    const [actionObjetive, setActionObjective] = useState("");

    const [linesProgram, setLinesProgram] = useState("");



    const [error, setError] = useState("");

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const dispatch = useAppDispatch();


    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    const addItem = () => {

        if (categoryGeneral.trim() === "") {
            setError('El campo categoria general no puede estar vacío.');
            return;
        }

        if (categorySpecify.trim() === "") {
            setError('El campo categoria especifica no puede estar vacío.');
            return;
        }

        if (service.trim() === "") {
            setError('El campo nombre bien / servicios no puede estar vacío.');
            return;
        }

        if (unit.trim() === "") {
            setError('El campo unidad de medida no puede estar vacío.');
            return;
        }

        if (subUnit.trim() === "") {
            setError('El campo sub unidad de medida no puede estar vacío.');
            return;
        }

        if (presentation.trim() === "") {
            setError('El campo presentacion no puede estar vacío.');
            return;
        }

        if (valueUnitary.trim() === "") {
            setError('El campo valor unitario con iva  no puede estar vacío.');
            return;
        }

        if (count.trim() === "") {
            setError('El campo cantidad no puede estar vacío.');
            return;
        }

        if (objetiveStrategy.trim() === "") {
            setError('El campo objetivo estartegico no puede estar vacío.');
            return;
        }

        if (subObjetiveStrategy.trim() === "") {
            setError('El campo sub tema obj. estrategico no puede estar vacío.');
            return;
        }

        if (actionObjetive.trim() === "") {
            setError('El campo acciones obj estrategico no puede estar vacío.');
            return;
        }

        if (program.trim() === "") {
            setError('El campo programa no puede estar vacío.');
            return;
        }

        if (linesProgram.trim() === "") {
            setError('El campo lineas del programa no puede estar vacío.');
            return;
        }

        console.log(addItem + "ESTA LLAMDO EL ADD")

        let newList: GoodsDto[] = data.PROY_BIENES_SERVICIOS ? data.PROY_BIENES_SERVICIOS : [];

        const newDataList = [...newList, {
            INDEX: helper.getRandomInt(),
            ID: null,
            CATEGORIA_GENERAL: categoryGeneral,
            CATEGORIA_ESPECIFICA: categorySpecify,
            NOMBRE_BIEN: service,
            UNIDAD_MEDIDA: unit,
            SUBUNIDAD_MEDIDA: subUnit,
            PRESENTACION: presentation,
            VALOR_UNITARIO: valueUnitary,
            CANTIDAD: count,
            OBJ_ESTRATEGICO: objetiveStrategy,
            SUBTEMA_OBJ_ESTRATEGICO: subObjetiveStrategy,
            ACCIONES: actionObjetive,
            PROGRAMA: program,
            LINEA_PROGRAMA: linesProgram,
        }];

        dispatch(addGoods(newDataList));

        setCategoryGeneral("");
        setCategorySpecify("");
        setService("");
        setUnit("");
        setSubUnit("");
        SetPresentation("");
        setValueUnitary("");
        setCount("");
        setObjetiveStrategy("");
        setSubObjetiveStrategy("");
        setActionObjective("");
        setProgram("");
        setLinesProgram("");
    }

    const deleteItem = async (item: GoodsDto, index: number) => {
        const newDataList = await data.PROY_BIENES_SERVICIOS?.filter((object: GoodsDto) => object.INDEX != item.INDEX);
        dispatch(addGoods(newDataList))
    }


    const unidadesDeMedida = [
        { id: 1, NAME: 'Porcentaje' },
        { id: 2, NAME: 'Capacidad' },
        { id: 3, NAME: 'Frecuencia' },
        { id: 4, NAME: 'Longitud' },
        { id: 5, NAME: 'Masa y peso' },
    ];

    const subUunidadesDeMedida = [
        // Porcentaje
        { id: 1, NAME: 'Porcentaje', simbolo: '%' },

        // Unidades de Capacidad
        { id: 2, NAME: 'Litro', simbolo: 'L' },
        { id: 3, NAME: 'Mililitro', simbolo: 'mL' },
        { id: 4, NAME: 'Metro Cúbico', simbolo: 'm³' },
        { id: 5, NAME: 'Galon', simbolo: 'gal' },

        // Unidad de Frecuencia
        { id: 6, NAME: 'Hertz', simbolo: 'Hz' },
        { id: 7, NAME: 'Kilohertz', simbolo: 'kHz' },
        { id: 8, NAME: 'Megahertz', simbolo: 'MHz' },

        // Longitud
        { id: 9, NAME: 'Metro', simbolo: 'm' },
        { id: 10, NAME: 'Kilómetro', simbolo: 'km' },
        { id: 11, NAME: 'Centímetro', simbolo: 'cm' },
        { id: 12, NAME: 'Pulgada', simbolo: 'in' },

        // Masa y Peso
        { id: 13, NAME: 'Gramo', simbolo: 'g' },
        { id: 14, NAME: 'Kilogramo', simbolo: 'kg' },
        { id: 15, NAME: 'Tonelada', simbolo: 't' },
        { id: 16, NAME: 'Libra', simbolo: 'lb' },
    ];

    const tipePresentation = [
        { id: 1, NAME: "caja" },
        { id: 2, NAME: "Carpeta" },
        { id: 3, NAME: "Folder" },
        { id: 4, NAME: "Resma" },
        { id: 3, NAME: "Galon" },
        { id: 4, NAME: "Garrafa" },
    ]

    const objEstartegy = [
        { id: 1, NAME: "Para la seguridad ciudadana" },
        { id: 2, NAME: "Para la criminalidad organizada" },
        { id: 3, NAME: "En la lucha contra la corrupción" },
        { id: 4, NAME: "Para el fortalecimiento en infraestructura tecnología y equipo humano" },
    ]

    const subObjEstrategy = [
        { id: 1, NAME: "Proteger la vida de las personas, con énfasis en algunas poblaciones priorizadas" },
        { id: 2, NAME: "Contribuir a la garantía de una vida libre de violencia para las mujeres y las niñas, niños y adolescentes" },
        { id: 3, NAME: "Contribuir al desarrollo armónico e integral de las niñas y los niños, así como a la formación integral de los adolescentes" },
        { id: 4, NAME: "Proteger el patrimonio y la integridad de la población" },
        { id: 5, NAME: "Proteger la vida y la integridad de los animales" },
        { id: 6, NAME: "Corredores Regionales de Criminalidad" },
        { id: 7, NAME: "Concentración de los esfuerzos investigativos en objetivos de alto valor y en Fenómenos criminales priorizado" },
        { id: 8, NAME: "Fenómenos criminales priorizados" },
        { id: 4, NAME: "Proteger el patrimonio y la integridad de la población" },
        { id: 5, NAME: "OE en la Lucha contra la Corrupción" },
        { id: 6, NAME: "Dotar a la Fiscalía con la infraestructura física adecuada para sus necesidades" },
        { id: 7, NAME: "Elevar el uso de tecnología en la lucha contra el delito" },
        { id: 8, NAME: "Desarrollar las capacidades y bienestar de nuestros colaboradores" },
        { id: 9, NAME: "Fortalecer el Sistema de Gestión Integral" },
    ]

    const actions = [
        { id: 1, NAME: "Fortalecimiento de la presencia de la Fiscalía en los territorios de Colombia, adaptando sus capacidades a los fenómenos delictivos de cada zona" },
        { id: 2, NAME: "Intervenciones itinerantes en delitos y regiones priorizadas" },
        { id: 3, NAME: "Desarrollo de un modelo investigativo que responda a las dinámicas delictivas de cada región" },
        { id: 4, NAME: "Redistribución de la presencia institucional de la Entidad" },
        { id: 5, NAME: "Fortalecimiento de la policía judicial por medio de la cooperación interinstitucional" },
        { id: 6, NAME: "Adopción de herramientas para mejorar la investigación: análisis de información, estandarización de procesos, mejor tecnología y capacitación" },
        { id: 7, NAME: "Estándares y protocolos de investigación " },
        { id: 8, NAME: "Mayor uso de tecnología para la investigación de delitos" },
        { id: 9, NAME: "Ampliación del acceso a la justicia por medio del uso de múltiples canales" },
        { id: 10, NAME: "Aprovechamiento de herramientas legales para elevar el éxito procesal de la FGN" },
        { id: 11, NAME: "Articulación de la FGN con la normativa y la institucionalidad internacionales " },
    ]

    const listProgram = [
        { id: 1, NAME: "Mejoramiento de la interacción de la FGN con la ciudadanía a través de lo digital" },
        { id: 2, NAME: "Mejoramiento de la infraestructura física de la FGN a nivel nacional" },
        { id: 3, NAME: "Ampliación de la infraestructura física en la FGN a nivel nacional" },
        { id: 4, NAME: "Operatividad para el acceso a la justicia" },
        { id: 5, NAME: "Fortalecimiento de los mecanismos jurídicos y tecnológicos para la consulta e intercambio de información que apoyan la investigación criminal" },
    ]

    const listLineProgram = [
        { id: 1, NAME: "Mejoramiento de la interacción de la FGN con la ciudadanía a través de lo digital" },
        { id: 2, NAME: "Mejoramiento de la infraestructura física de la FGN a nivel nacional" },
        { id: 3, NAME: "Ampliación de la infraestructura física en la FGN a nivel nacional" },
        { id: 4, NAME: "Operatividad para el acceso a la justicia" },
        { id: 5, NAME: "Fortalecimiento de los mecanismos jurídicos y tecnológicos para la consulta e intercambio de información que apoyan la investigación criminal" },
        { id: 6, NAME: "Toma de decisiones mediante analítica de datos para el apoyo a los territorios" },
        { id: 7, NAME: "Fortalecimiento de la capacidad técnico-científica de los laboratorios y grupos de criminalística" },
        { id: 8, NAME: "Fortalecimiento y modernización tecnológica de la policía judicial de la FGN para la investigación penal" },
        { id: 9, NAME: "Fortalecimiento de las investigaciones de los delitos contra los recursos naturales y el medio ambiente" },
        { id: 10, NAME: "Fortalecimiento del conocimiento y competencias de los servidores de la Fiscalía" },
        { id: 11, NAME: "Fortalecimiento de las investigaciones de los demás delitosl" },
        { id: 12, NAME: "Fortalecer los sistemas de información penal y de apoyo de la FGN" },
        { id: 13, NAME: "Dotar de infraestructura y componentes tecnológicos que faciliten la investigación penal en los territorios" },
    ]

    return (
        <>
            <Row className="mt-3">
                <Col lg="4">
                    <InputSelected label="Categoria general*" options={categoriesGeneral} onChange={(value: any) => setCategoryGeneral(value)} value={categoryGeneral} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Categoria especifica*" options={categoriesSpecifies} onChange={(value: any) => setCategorySpecify(value)} value={categorySpecify} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Nombre bien/Servicio*" options={services} onChange={(value: any) => setService(value)} value={service} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg="2">
                    <InputSelected label="Unidad de medida*" options={unidadesDeMedida} onChange={(value: any) => setUnits(value)} value={unit} />
                </Col>
                <Col lg="2">
                    <InputSelected label="Sub unidad de medida*" options={subUunidadesDeMedida} onChange={(value: any) => setSubUnit(value)} value={subUnit} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Presentacion*" options={tipePresentation} onChange={(value: any) => SetPresentation(value)} value={presentation} />
                </Col>
                <Col lg="2">
                    <InputFloating name="PROY_VALOR_UNITARIO_IVA" label="Valor unit con iva*" className="mb-3 inputFloating" type="string" setValueChange={(value: string) => setValueUnitary(value)} value={valueUnitary} />
                </Col>
                <Col lg="2">
                    <InputFloating name="PROY_CANTIDAD" label="Cantidad*" className="mb-3 inputFloating" type="number" setValueChange={(value: string) => setCount(value)} value={count} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg="4">
                    <InputSelected label="Obj. estrategico del direccionamiento*" options={objEstartegy} onChange={(value: any) => setObjetiveStrategy(value)} value={objetiveStrategy} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Sub tema del Obj. estrategico*" options={subObjEstrategy} onChange={(value: any) => setSubObjetiveStrategy(value)} value={subObjetiveStrategy} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Acciones Objs. estrategicos*" options={actions} onChange={(value: any) => setActionsObjectives(value)} value={actionObjetive} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={4}>
                    <InputSelected label="Programa*" options={listProgram} onChange={(value: any) => setProgram(value)} value={program} />
                </Col>
                <Col sm={4}>
                    <InputSelected label="Lineas del programa*" options={listLineProgram} onChange={(value: any) => setLinesProgram(value)} value={linesProgram} />
                </Col>
                <Col className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar bien/servicio" classStyle="mt-4 " onClick={() => addItem()} />
                </Col>
            </Row>

            <div className="row">
                <div className="col-lg-12">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            <hr />

            <TableListGoods />
        </>
    )
}