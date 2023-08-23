
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks"
import Buttons from "../../../../atoms/button/Buttons"
import InputSelected from "../../../../atoms/selected/InputSelected"
import { GeneralObjective } from "../generalObjective/GeneralObjective"
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific"
import { RequestDto } from "../../../../../models/general/RequestDto";
import { GeneralSelector, addObjetiveSpecifies, setDataGeneral } from "../../../../../redux/states/generals/general.slice";
import { ProgramSelector, fetchApiLinePrograms, fetchApiPrograms, filterByProgramId, } from "../../../../../redux/states/generals/program.slice";
import { CategorySelector, fetchApiCategoriesGenerals, fetchApiCategoriesSpecifies, filterByCategoryGeneralId } from "../../../../../redux/states/generals/category.slice";
import { SpecificObjetiveDto } from "../../../../../models/general/SpecificObjetiveDto";
import helper from "../../../../../utils/helper";
import { UnitSelector, fetchApiSubUnits, fetchApiUnits } from "../../../../../redux/states/generals/unit.slice";
import { GoodSelector, fetchApiGood } from "../../../../../redux/states/generals/good.slice";
import { ObjetiveSelector, fetchApiActionStrategies, fetchApiObjetives, fetchApiSubObjetives, filterBySubObjetiveByParentId } from "../../../../../redux/states/generals/objetive.slice";

interface GeneralSpecificInterface {
    type?: string
}

export const GeneralSpecific = ({ type }: GeneralSpecificInterface) => {

    // dispath
    const dispatch = useAppDispatch();

    // state basics
    const [error, setError] = useState("");
    const { data, errorInputs } = useAppSelector(GeneralSelector);
    const { generals, specifies, specifies_filter } = useAppSelector(CategorySelector);
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

    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [disabledCategorySpecific, setDisabledCategorySpecific] = useState(true);

    const [service, setService] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState("");

    const [disabledSubObjetive, setDisableSubObjetive] = useState(true)

    const [actionObjetiveStrategy, setActionObjetiveStrategy] = useState("");

    const [program, setProgram] = useState("");

    const [linesProgram, setLinesProgram] = useState("");

    const [disabledLinesProgram, setDisabledLinesProgram] = useState(true);

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    const addItem = async () => {

        let objetives: SpecificObjetiveDto[] = data.PROY_OBJETIVOS_ESPECIFICOS ? data.PROY_OBJETIVOS_ESPECIFICOS : [];

        if (type !== "cooperative") {
            if (data.PROY_OBJETIVO_ESPECIFICO == "") {
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
                setError('Indicador general vacio.');
                return false;
            }

            if (data.PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY == "") {
                setError('Indicador general vacio.');
                return false;
            }

        } else {
            if (data.PROY_OBJETIVO_ESPECIFICO == "") {
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

        const newItem = [...objetives, {
            INDEX: helper.getRandomInt(),
            ID: null,
            OBJETIVO: data.PROY_OBJETIVO_GENERAL_SPECIFY,
            DESCRIPCION: data.PROY_DESCRIPCION_GENERAL_SPECIFY,
            INDICADOR: data.PROY_INDICADOR_GENERAL_SPECIFY,
            LINEA_BASE: data.PROY_LINEA_BASE_GENERAL_SPECIFY,
            META: data.PROY_META_GENERAL_SPECIFY,
            MES_INICIAL: data.PROY_MES_INICIO_GENERAL_SPECIFY,
            MES_FINAL: data.PROY_MES_FINAL_GENERAL_SPECIFY,
            ENTREGABLE: data.PROY_ENTREGABLE_GENERAL_SPECIFY,
            DESCRIPCION_ENTREGABLE: data.PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY,
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

    return (
        <>
            <GeneralObjective type={type} isSpecify={true} />
            <div className="row mt-3 mb-2">
                <h5>Información detallada <span className="text-danger">*</span></h5>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Categoria general / eje Tematico" options={generals} onChange={(value: any) => changeCategoryGeneral(value)} value={categoryGeneral} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Categoria Especifica" options={specifies_filter} onChange={(value: any) => setCategorySpecify(value)} value={categorySpecify} disabled={disabledCategorySpecific} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Nombre Bien / Servicio" options={goods} onChange={(value: any) => setService(value)} value={service} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Objetivo estratégico direccionamiento" options={strategies} onChange={(value: any) => changeObjetiveDirection(value)} value={objetiveStrategy} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Subtema del objetivo estratégico" options={sub_strategies_filters} onChange={(value: any) => setSubObjetiveStrategy(value)} value={subObjetiveStrategy} disabled={disabledSubObjetive} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Acciones Objetivo estratégico" options={actions} onChange={(value: any) => setActionObjetiveStrategy(value)} value={actionObjetiveStrategy} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Programa" options={programs} onChange={(value: any) => changeProgram(value)} value={program} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Lineas del programa" options={line_programs_filters} onChange={(value: any) => setLinesProgram(value)} value={linesProgram} disabled={disabledLinesProgram} />
                </div>
                <div className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar objetivo especifico" classStyle="mt-4 " onClick={() => addItem()} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            <TableObjectiveSpecific type={type} />
        </>
    )
}