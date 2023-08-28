
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks"
import Buttons from "../../../../atoms/button/Buttons"
import InputSelected from "../../../../atoms/selected/InputSelected"
import { GeneralObjective } from "../../../general/objective/generalObjective/GeneralObjective"
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific"
import { RequestDto } from "../../../../../models/general/RequestDto";
import { GeneralSelector, addObjetiveSpecifies, clearSpecifiesInputs, setDataGeneral } from "../../../../../redux/states/generals/general.slice";
import { ProgramSelector, fetchApiLinePrograms, fetchApiPrograms, filterByProgramId, } from "../../../../../redux/states/generals/program.slice";
import { CategorySelector, fetchApiCategoriesGenerals, fetchApiCategoriesSpecifies, filterByCategoryGeneralId } from "../../../../../redux/states/generals/category.slice";
import { SpecificObjetiveDto } from "../../../../../models/general/SpecificObjetiveDto";
import helper from "../../../../../utils/helper";
import { UnitSelector, fetchApiSubUnits, fetchApiUnits } from "../../../../../redux/states/generals/unit.slice";
import { GoodSelector, fetchApiGood } from "../../../../../redux/states/generals/good.slice";
import { ObjetiveSelector, fetchApiActionStrategies, fetchApiObjetives, fetchApiSubObjetives, filterBySubObjetiveByParentId } from "../../../../../redux/states/generals/objetive.slice";

interface GeneralSpecificInterface {
    type: string,
    viewDetail?: boolean,
}

export const GeneralSpecific = ({ type, viewDetail = false }: GeneralSpecificInterface) => {

    // dispath
    const dispatch = useAppDispatch();

    // state basics
    const [error, setError] = useState("");
    const { data, errorInputs } = useAppSelector(GeneralSelector);
    const { generals, specifies_filter } = useAppSelector(CategorySelector);
    const { programs, line_programs_filters } = useAppSelector(ProgramSelector);
    const { strategies, sub_strategies_filters, actions } = useAppSelector(ObjetiveSelector)
    const { goods } = useAppSelector(GoodSelector)

    useEffect(() => {
        dispatch(fetchApiPrograms());
        dispatch(fetchApiLinePrograms());
        dispatch(fetchApiCategoriesGenerals());
        dispatch(fetchApiCategoriesSpecifies());
        dispatch(fetchApiGood());
        dispatch(fetchApiObjetives())
        dispatch(fetchApiSubObjetives())
        dispatch(fetchApiActionStrategies())
    }, [])

    // INPUT

    const [categoryGeneral, setCategoryGeneral] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS ? data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.CATEGORIA_GENERAL : "");

    const [categorySpecify, setCategorySpecify] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS ? data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS.CATEGORIA_ESPECIFICA : "");

    const [disabledCategorySpecific, setDisabledCategorySpecific] = useState(true);

    const [service, setService] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS ? data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS.NOMBRE_BIEN : "");

    const [objetiveStrategy, setObjetiveStrategy] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS ? data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS.OBJETIVO_ESTRATEGICO : "");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.SUBTEMA_OBJETIVO_ESTRATEGICO ?? "");

    const [disabledSubObjetive, setDisableSubObjetive] = useState(true)

    const [actionObjetiveStrategy, setActionObjetiveStrategy] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.ACCIONES_OBJETIVO_ESTRATEGICO ?? "");

    const [program, setProgram] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.PROGRAMA ?? "");

    const [linesProgram, setLinesProgram] = useState(data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.LINEA_PROGRAMA ?? "");

    const [disabledLinesProgram, setDisabledLinesProgram] = useState(true);

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        console.log("index request by clear", index);

        console.log("value request by clear", value);

        console.log("update request by clear", updatedRequest);

        dispatch(setDataGeneral(updatedRequest));
    }

    const addItem = async () => {

        let objetives: SpecificObjetiveDto[] = data.PROY_OBJETIVOS_ESPECIFICOS ? data.PROY_OBJETIVOS_ESPECIFICOS : [];

        if (type !== "cooperative") {
            if (data.PROY_OBJETIVO_GENERAL_SPECIFY == "") {
                setError('Objetivo especifico vacio.');
                return false;
            }

            if (data.PROY_DESCRIPCION_GENERAL_SPECIFY == "") {
                setError('Descripción objetivo especifico vacio.');
                return false;
            }

            if (data.PROY_INDICADOR_GENERAL_SPECIFY == "") {
                setError('Indicador general vacio.');
                return false;
            }

            if (data.PROY_LINEA_BASE_GENERAL_SPECIFY == "") {
                setError('Linea base vacia.');
                return false;
            }

            if (data.PROY_META_GENERAL_SPECIFY == "") {
                setError('Meta vacia.');
                return false;
            }

            if (data.PROY_MES_INICIO_GENERAL_SPECIFY == "") {
                setError('Mes inicio vacio.');
                return false;
            }

            if (data.PROY_MES_FINAL_GENERAL_SPECIFY == "") {
                setError('Mes final vacio.');
                return false;
            }

            if (data.PROY_ENTREGABLE_GENERAL_SPECIFY == "") {
                setError('Entregable general vacio.');
                return false;
            }

            if (data.PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY == "") {
                setError('Descripción entregable general vacio.');
                return false;
            }

        } else {
            if (data.PROY_OBJETIVO_GENERAL_SPECIFY == "") {
                setError('Objetivo especifico vacio.');
                return false;
            }

            if (data.PROY_DESCRIPCION_GENERAL_SPECIFY == "") {
                setError('Descripción objetivo especifico vacio.');
                return false;
            }

            if (data.PROY_INDICADOR_GENERAL_SPECIFY == "") {
                setError('Indicador general vacio.');
                return false;
            }

            if (data.PROY_RESULTADO_ESPERADO_SPECIFY == "") {
                setError('Resultado esperado vacio.');
                return false;
            }

            if (data.PROY_MES_INICIO_GENERAL_SPECIFY == "") {
                setError('Mes inicio vacio.');
                return false;
            }

            if (data.PROY_MES_FINAL_GENERAL_SPECIFY == "") {
                setError('Mes final vacio.');
                return false;
            }
        }

        //detalles
        if (categoryGeneral == "") {
            setError('Categoria general vacio.');
            return false;
        }

        if (categorySpecify == "") {
            setError('Categoria especifica vacio.');
            return false;
        }

        if (service == "") {
            setError('Servicio o bien vacio.');
            return false;
        }

        if (objetiveStrategy == "") {
            setError('Objetivo estrategico vacio.');
            return false;
        }

        if (subObjetiveStrategy == "") {
            setError('SubObjetivo estrategico vacio.');
            return false;
        }

        if (actionObjetiveStrategy == "") {
            setError('Accion del estrategico vacio.');
            return false;
        }

        if (program == "") {
            setError('Programa vacio.');
            return false;
        }

        if (linesProgram == "") {
            setError('Linea de programa vacia.');
            return false;
        }

        let OBJETIVO = data.PROY_OBJETIVO_GENERAL_SPECIFY;
        let DESCRIPCION = data.PROY_DESCRIPCION_GENERAL_SPECIFY;
        let INDICADOR = data.PROY_INDICADOR_GENERAL_SPECIFY;
        let LINEA_BASE = data.PROY_LINEA_BASE_GENERAL_SPECIFY;
        let META = data.PROY_META_GENERAL_SPECIFY;
        let MES_INICIAL = data.PROY_MES_INICIO_GENERAL_SPECIFY;
        let MES_FINAL = data.PROY_MES_FINAL_GENERAL_SPECIFY;
        let ENTREGABLE = data.PROY_ENTREGABLE_GENERAL_SPECIFY;
        let DESCRIPCION_ENTREGABLE = data.PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY;

        const newItem = [...objetives, {
            INDEX: helper.getRandomInt(),
            ID: helper.getRandomInt(),
            OBJETIVO: OBJETIVO,
            DESCRIPCION: DESCRIPCION,
            INDICADOR: INDICADOR,
            LINEA_BASE: LINEA_BASE,
            META: META,
            MES_INICIAL: MES_INICIAL,
            MES_FINAL: MES_FINAL,
            ENTREGABLE: ENTREGABLE,
            DESCRIPCION_ENTREGABLE: DESCRIPCION_ENTREGABLE,
            CATEGORIA_GENERAL: categoryGeneral,
            CATEGORIA_ESPECIFICA: categorySpecify,
            NOMBRE_BIEN: service,
            OBJETIVO_ESTRATEGICO: objetiveStrategy,
            SUBTEMA_OBJETIVO_ESTRATEGICO: subObjetiveStrategy,
            ACCIONES_OBJETIVO_ESTRATEGICO: actionObjetiveStrategy,
            PROGRAMA: program,
            LINEA_PROGRAMA: linesProgram,
        }];

        dispatch(addObjetiveSpecifies(newItem));

        setError("");
        clearInputs()
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

    const clearInputs = () => {

        dispatch(clearSpecifiesInputs(true))

        setCategoryGeneral("")
        setCategorySpecify("")
        setDisabledCategorySpecific(true)
        setService("")
        setObjetiveStrategy("")
        setSubObjetiveStrategy("")
        setDisableSubObjetive(true)
        setActionObjetiveStrategy("")
        setProgram("")
        setLinesProgram("")
        setDisabledLinesProgram(true)
    }

    return (
        <div>
            <GeneralObjective type={type} isSpecify={true} viewDetail={viewDetail} />
            <div className="row mt-3 mb-2">
                <h5>Información detallada <span className="text-danger">*</span></h5>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Categoria general / eje Tematico" options={generals ? generals : []} onChange={(value: any) => changeCategoryGeneral(value)} value={categoryGeneral} disabled={viewDetail} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Categoria Especifica" options={specifies_filter ? specifies_filter : []} onChange={(value: any) => setCategorySpecify(value)} value={categorySpecify} disabled={disabledCategorySpecific || viewDetail} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Nombre Bien / Servicio" options={goods ? goods : []} onChange={(value: any) => setService(value)} value={service} disabled={viewDetail} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Objetivo estratégico direccionamiento" options={strategies ? strategies : []} onChange={(value: any) => changeObjetiveDirection(value)} value={objetiveStrategy} disabled={viewDetail} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Subtema del objetivo estratégico" options={sub_strategies_filters ? sub_strategies_filters : []} onChange={(value: any) => setSubObjetiveStrategy(value)} value={subObjetiveStrategy} disabled={disabledSubObjetive || viewDetail} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Acciones Objetivo estratégico" options={actions ? actions : []} onChange={(value: any) => setActionObjetiveStrategy(value)} value={actionObjetiveStrategy} disabled={viewDetail} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Programa" options={programs ? programs : []} onChange={(value: any) => changeProgram(value)} value={program} disabled={viewDetail} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Lineas del programa" options={line_programs_filters ? line_programs_filters : []} onChange={(value: any) => setLinesProgram(value)} value={linesProgram} disabled={disabledLinesProgram || viewDetail} />
                </div>
                <div className="col-lg-4 text-center">
                    {!viewDetail ? (<Buttons variant="outline-info" label="Agregar objetivo especifico" classStyle="mt-4 " onClick={() => addItem()} />) : <></>}

                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            {!viewDetail ? (
                <TableObjectiveSpecific type={type} />
            ) : <></>}

        </div>
    )
}