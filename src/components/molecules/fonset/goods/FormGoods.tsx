import React, { useState, useEffect } from "react";
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
import { CATEGORY_GENERAL, CATEGORY_SPECIFYC, LIST_ACTIONS_STRATEGIES_OBJETIVES, LIST_LINES_PROGRAMS, LIST_OBJETIVES_STRATEGIES_DIRECTIONS, LIST_PROGRAMS, LIST_SUB_OBJETIVES, SERVICES, SUB_UNID_MEASUREMENT, TIPE_PRESENTATION, UNID_MEASUREMENT } from "../../../../config/constants";
import { CategorySelector, fetchApiCategoriesGenerals, fetchApiCategoriesSpecifies, filterByCategoryGeneralId } from "../../../../redux/states/generals/category.slice";
import { ProgramSelector, fetchApiLinePrograms, fetchApiPrograms, filterByProgramId } from "../../../../redux/states/generals/program.slice";
import { UnitSelector, fetchApiSubUnits, fetchApiUnits, filterByUnitId } from "../../../../redux/states/generals/unit.slice";
import { GoodSelector, fetchApiGood } from "../../../../redux/states/generals/good.slice";
import { ObjetiveSelector, fetchApiActionStrategies, fetchApiObjetives, fetchApiSubObjetives, filterBySubObjetiveByParentId } from "../../../../redux/states/generals/objetive.slice";


export default function FormGoods() {

    const dispatch = useAppDispatch();

    const { programs, line_programs_filters } = useAppSelector(ProgramSelector);
    const { generals, specifies_filter } = useAppSelector(CategorySelector);
    const { unities, sub_unities_filters } = useAppSelector(UnitSelector);
    const { goods } = useAppSelector(GoodSelector);
    const { strategies, sub_strategies_filters, actions } = useAppSelector(ObjetiveSelector);

    useEffect(() => {
        dispatch(fetchApiPrograms());
        dispatch(fetchApiLinePrograms());
        dispatch(fetchApiCategoriesGenerals());
        dispatch(fetchApiCategoriesSpecifies());
        dispatch(fetchApiUnits());
        dispatch(fetchApiSubUnits());
        dispatch(fetchApiGood());
        dispatch(fetchApiObjetives())
        dispatch(fetchApiSubObjetives())
        dispatch(fetchApiActionStrategies())
    }, [dispatch])

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

    // INPUT
    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [disabledCategorySpecific, setDisabledCategorySpecific] = useState(true);

    const [service, setService] = useState("");

    const [unit, setUnit] = useState("");

    const [subUnit, setSubUnit] = useState("");

    const [disabledSubUnit, setDisabledSubUnit] = useState(true);

    const [presentation, SetPresentation] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [valueUnitary, setValueUnitary] = useState("");

    const [count, setCount] = useState("");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState("");

    const [disabledSubObjetive, setDisableSubObjetive] = useState(true)

    const [program, setProgram] = useState("");

    const [actionObjetive, setActionObjective] = useState("");

    const [linesProgram, setLinesProgram] = useState("");

    const [disabledLinesProgram, setDisabledLinesProgram] = useState(true);

    const [error, setError] = useState("");

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    const addItem = () => {

        if (categoryGeneral.trim() == "") {
            setError('El campo categoria general no puede estar vacío.');
            return;
        }

        if (categorySpecify.trim() == "") {
            setError('El campo categoria especifica no puede estar vacío.');
            return;
        }

        if (service.trim() == "") {
            setError('El campo nombre bien / servicios no puede estar vacío.');
            return;
        }

        if (unit.trim() == "") {
            setError('El campo unidad de medida no puede estar vacío.');
            return;
        }

        if (subUnit.trim() == "") {
            setError('El campo sub unidad de medida no puede estar vacío.');
            return;
        }

        if (presentation.trim() == "") {
            setError('El campo presentacion no puede estar vacío.');
            return;
        }

        if (valueUnitary.trim() == "") {
            setError('El campo valor unitario con iva  no puede estar vacío.');
            return;
        }

        if (count.trim() == "") {
            setError('El campo cantidad no puede estar vacío.');
            return;
        }

        if (objetiveStrategy.trim() == "") {
            setError('El campo objetivo estartegico no puede estar vacío.');
            return;
        }

        if (subObjetiveStrategy.trim() == "") {
            setError('El campo sub tema obj. estrategico no puede estar vacío.');
            return;
        }

        if (actionObjetive.trim() == "") {
            setError('El campo acciones obj estrategico no puede estar vacío.');
            return;
        }

        if (program.trim() == "") {
            setError('El campo programa no puede estar vacío.');
            return;
        }

        if (linesProgram.trim() == "") {
            setError('El campo lineas del programa no puede estar vacío.');
            return;
        }

        console.log(addItem + "ESTA LLAMDO EL ADD")

        let newList: GoodsDto[] = data.PROY_BIENES_SERVICIOS ? data.PROY_BIENES_SERVICIOS : [];

        const newDataList = [...newList, {
            INDEX: helper.getRandomInt(),
            ID: helper.getRandomInt(),
            CATEGORIA_GENERAL: categoryGeneral,
            CATEGORIA_GENERAL_TEXT: CATEGORY_GENERAL.find(item => item.id == Number(categoryGeneral))?.description,
            CATEGORIA_ESPECIFICA: categorySpecify,
            CATEGORIA_ESPECIFICA_TEXT: CATEGORY_SPECIFYC.find(item => item.id == Number(categorySpecify))?.description,
            NOMBRE_BIEN: service,
            NOMBRE_BIEN_TEXT: SERVICES.find(item => item.id == Number(service))?.description,
            UNIDAD_MEDIDA: unit,
            UNIDAD_MEDIDA_TEXT: unities.find(item => item.id == Number(unit))?.description,
            SUBUNIDAD_MEDIDA: subUnit,
            SUBUNIDAD_MEDIDA_TEXT: sub_unities_filters.find(item => item.id == Number(subUnit))?.description,
            PRESENTACION: presentation,
            PRESENTACION_TEXT: TIPE_PRESENTATION.find(item => item.id == Number(presentation))?.description,

            VALOR_UNITARIO: valueUnitary,
            CANTIDAD: count,

            OBJ_ESTRATEGICO: objetiveStrategy,
            OBJ_ESTRATEGICO_TEXT: LIST_OBJETIVES_STRATEGIES_DIRECTIONS.find(item => item.id == Number(objetiveStrategy))?.description,
            SUBTEMA_OBJ_ESTRATEGICO: subObjetiveStrategy,
            SUBTEMA_OBJ_ESTRATEGICO_TEXT: LIST_SUB_OBJETIVES.find(item => item.id == Number(subObjetiveStrategy))?.description,
            ACCIONES: actionObjetive,
            ACCIONES_TEXT: LIST_ACTIONS_STRATEGIES_OBJETIVES.find(item => item.id == Number(actionObjetive))?.description,
            PROGRAMA: program,
            PROGRAMA_TEXT: LIST_PROGRAMS.find(item => item.id == Number(program))?.description,
            LINEA_PROGRAMA: linesProgram,
            LINEA_PROGRAMA_TEXT: LIST_LINES_PROGRAMS.find(item => item.id == Number(linesProgram))?.description,
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
        const newDataList = await data.PROY_BIENES_SERVICIOS?.filter((object: GoodsDto) => object.ID != item.ID);
        dispatch(addGoods(newDataList))
    }

    const changeProgram = (value: any) => {

        if (value == "") {
            setDisabledLinesProgram(true);
            setError("Seleccione un programa")
            return
        }

        setProgram(value)

        dispatch(filterByProgramId(Number(value)));

        setDisabledLinesProgram(false);
    }

    const changeCategoryGeneral = (value: any) => {
        setCategoryGeneral(value);

        if (value == "") {
            setError("Seleccionar un objetivo general")
            setDisabledCategorySpecific(true)
            return
        }

        dispatch(filterByCategoryGeneralId(value))

        setDisabledCategorySpecific(false)
    }

    const changeObjetiveDirection = (value: any) => {
        setObjetiveStrategy(value);

        if (value == "") {
            setError("Seleccionar el objetivo de direccionamiento")
            setDisableSubObjetive(true)
            return
        }

        dispatch(filterBySubObjetiveByParentId(value))

        setDisableSubObjetive(false)
    }

    const changeUnit = (value: any) => {

        console.log("typeof", typeof value);
        console.log("value", value);

        if (value == "") {
            setError("Seleccionar una unidad de medida")
            setDisabledSubUnit(true)
            return
        }

        dispatch(filterByUnitId(value))

        setUnit(value);

        setDisabledSubUnit(false)
    }

    return (
        <>
            <Row className="mt-3">
                <Col lg="4">
                    <InputSelected label="Categoria general*" options={generals ? generals : []} onChange={(value: any) => changeCategoryGeneral(value)} value={categoryGeneral} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Categoria especifica*" options={specifies_filter ? specifies_filter : []} onChange={(value: any) => setCategorySpecify(value)} value={categorySpecify} disabled={disabledCategorySpecific} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Nombre bien/Servicio*" options={goods ? goods : []} onChange={(value: any) => setService(value)} value={service} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg="2">
                    <InputSelected label="Unidad de medida*" options={unities ? unities : []} onChange={(value: any) => changeUnit(value)} value={unit} />
                </Col>
                <Col lg="2">
                    <InputSelected label="Subuni. de medida*" options={sub_unities_filters ? sub_unities_filters : []} onChange={(value: any) => setSubUnit(value)} value={subUnit} disabled={disabledSubUnit} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Presentacion*" options={TIPE_PRESENTATION} onChange={(value: any) => SetPresentation(value)} value={presentation} />
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
                    <InputSelected label="Obj. estrategico del direccionamiento*" options={strategies ? strategies : []} onChange={(value: any) => changeObjetiveDirection(value)} value={objetiveStrategy} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Sub tema del Obj. estrategico*" options={sub_strategies_filters ? sub_strategies_filters : []} onChange={(value: any) => setSubObjetiveStrategy(value)} value={subObjetiveStrategy} disabled={disabledSubObjetive} />
                </Col>
                <Col lg="4">
                    <InputSelected label="Acciones Objs. estrategicos*" options={actions ? actions : []} onChange={(value: any) => setActionObjective(value)} value={actionObjetive} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={4}>
                    <InputSelected label="Programa*" options={programs ? programs : []} onChange={(value: any) => changeProgram(value)} value={program} />
                </Col>
                <Col sm={4}>
                    <InputSelected label="Lineas del programa*" options={line_programs_filters ? line_programs_filters : []} onChange={(value: any) => setLinesProgram(value)} value={linesProgram} disabled={disabledLinesProgram} />
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