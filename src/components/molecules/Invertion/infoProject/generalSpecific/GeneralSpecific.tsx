
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks"
import Buttons from "../../../../atoms/button/Buttons"
import InputSelected from "../../../../atoms/selected/InputSelected"
import { GeneralObjective } from "../generalObjective/GeneralObjective"
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific"
import { RequestDto } from "../../../../../models/general/RequestDto";
import { GeneralSelector, addObjetiveSpecifies, setDataGeneral } from "../../../../../redux/states/generals/general.slice";
import { ProgramSelector, fetchApiLinePrograms, fetchApiPrograms } from "../../../../../redux/states/generals/program.slice";
import { CategorySelector, fetchApiCategoriesGenerals, fetchApiCategoriesSpecifies } from "../../../../../redux/states/generals/category.slice";
import { SpecificObjetiveDto } from "../../../../../models/general/SpecificObjetiveDto";
import helper from "../../../../../utils/helper";
import { UnitSelector, fetchApiSubUnits, fetchApiUnits } from "../../../../../redux/states/generals/unit.slice";
import { GoodSelector } from "../../../../../redux/states/generals/good.slice";

interface GeneralSpecificInterface {
    type?: string
}

export const GeneralSpecific = ({ type }: GeneralSpecificInterface) => {

    // dispath
    const dispatch = useAppDispatch();

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const { generals, specifies } = useAppSelector(CategorySelector);

    const { programs, line_programs_filters } = useAppSelector(ProgramSelector);
    const { unities, sub_unities, sub_unities_filters } = useAppSelector(UnitSelector);
    const { goods } = useAppSelector(GoodSelector)

    useEffect(() => {
        dispatch(fetchApiLinePrograms());
        dispatch(fetchApiPrograms());
        dispatch(fetchApiCategoriesGenerals());
        dispatch(fetchApiCategoriesSpecifies());
        dispatch(fetchApiUnits());
        dispatch(fetchApiSubUnits());
        // dispatch(fet());
    }, [])

    // 

    const [categoriesGeneral, setCategoriesGeneral] = useState(generals);

    const [categoriesSpecifies, setCategoriesSpecifies] = useState(specifies);

    const [services, setServices] = useState(goods);

    const [objetiveStrategies, setObjetiveStrategies] = useState([]);

    const [subOjectiveStrategies, setSubOjectiveStrategies] = useState([]);

    const [actionsObjetives, setActionsObjectives] = useState([]);

    const [programsList, setPrograms] = useState(programs);

    const [linesPrograms, setLinesPrograms] = useState(line_programs_filters);

    // INPUT

    const [categoryGeneral, setCategoryGeneral] = useState("");

    const [categorySpecify, setCategorySpecify] = useState("");

    const [service, setService] = useState("");

    const [objetiveStrategy, setObjetiveStrategy] = useState("");

    const [subObjetiveStrategy, setSubObjetiveStrategy] = useState("");

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

        // let findInfo = await objetives.filter((item: SpecificObjetiveDto) => item.DESCRIPCION == itemDescription);

        // if (findInfo && findInfo.length > 0) {
        //     setError('El valor ya existe.');
        //     return false;
        // }

        const newItem = [...objetives, {
            INDEX: helper.getRandomInt(),
            ID: null,
            OBJETIVO: data.PROY_OBJETIVO_ESPECIFICO,
            DESCRIPCIÓN: data.PROY_DESCRIPCION_GENERAL_SPECIFY,
            INDICADOR: data.PROY_INDICADOR_GENERAL_SPECIFY,
            LINEA_BASE: data.PROY_LINEA_BASE_GENERAL_SPECIFY,
            META: data.PROY_META_GENERAL_SPECIFY,
            MES_INICIAL: data.PROY_MES_INICIO_GENERAL_SPECIFY,
            MES_FINAL: data.PROY_MES_FINAL_GENERAL_SPECIFY,
            ENTREGABLE: data.PROY_ENTREGABLE_GENERAL_SPECIFY,
            DESCRIPCION_ENTREGABLE: "",
            CATEGORIA_GENERAL: categoryGeneral,
            CATEGORIA_ESPECIFICA: categorySpecify,
            NOMBRE_BIEN: service,
            OBJETIVO_ESTRATEGICO: objetiveStrategy,
            SUBTEMA_OBJETIVO_ESTRATEGICO: subObjetiveStrategy,
            ACCIONES_OBJETIVO_ESTRATEGICO: actionObjetiveStrategy,
            PROGRAMA: program,
            LINEA_PROGRAMA: linesProgram,
        }]

        dispatch(addObjetiveSpecifies(newItem));

        // setError("");
        // setNameEntity("");
    }

    const deleteItem = async (item: SpecificObjetiveDto, index: number) => {

        let newList = data.PROY_OBJETIVOS_ESPECIFICOS?.filter((object: SpecificObjetiveDto) => object.INDEX !== item.INDEX);

        dispatch(addObjetiveSpecifies(newList));
    }

    const changeProgram = (value: any) => {

        if (value == "") {
            return
        }
        setProgram(value)
    }

    return (
        <>
            <GeneralObjective type={type} isSpecify={true} />
            <div className="row mt-3 mb-2">
                <h5>Información detallada <span className="text-danger">*</span></h5>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Categoria general / eje Tematico" options={categoriesGeneral} onChange={(value: any) => setCategoryGeneral(value)} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Categoria Especifica" options={categoriesSpecifies} onChange={(value: any) => setCategorySpecify(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Nombre Bien / Servicio" options={services} onChange={(value: any) => setService(value)} value="" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Objetivo estratégico direccionamiento" options={objetiveStrategies} onChange={(value: any) => setObjetiveStrategy(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Subtema del objetivo estratégico" options={subOjectiveStrategies} onChange={(value: any) => setSubObjetiveStrategy(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Acciones Objetivo estratégico" options={actionsObjetives} onChange={(value: any) => setActionsObjectives(value)} value="" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputSelected label="Programa" options={programsList} onChange={(value: any) => changeProgram(value)} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Lineas del programa" options={linesPrograms} onChange={(value: any) => setLinesProgram(value)} value="" disabled={disabledLinesProgram} />
                </div>
                <div className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar objetivo especifico" classStyle="mt-4 " onClick={() => addItem()} />
                </div>
            </div>
            <TableObjectiveSpecific />
        </>
    )
}