import { RequestDto } from "../../../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../../redux/states/generals/general.slice";
import TextArea from "../../../../atoms/area/TextArea"
import { Row, Col } from "react-bootstrap";
import InputFloating from "../../../../atoms/input/Input"

interface GeneralObjectiveInterface {
    type?: string;
    isSpecify?: boolean
}

export const GeneralObjective = ({ type, isSpecify = false }: GeneralObjectiveInterface) => {

    const dispatch = useAppDispatch();

    const { data, errorInputs } = useAppSelector(GeneralSelector)

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    return (
        <>
            <div className="row mt-4">
                <h5>Información General <span className="text-danger">*</span></h5>
            </div>
            {
                type !== "cooperative" ?
                    (
                        <>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <InputFloating name={"PROY_OBJETIVO_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_OBJETIVO_GENERAL_SPECIFY : data.PROY_OBJETIVO_GENERAL} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <InputFloating name={"PROY_DESCRIPCION_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_DESCRIPCION_GENERAL_SPECIFY : data.PROY_DESCRIPCION_GENERAL} />
                                </div>
                                <div className="col-lg-6">
                                    <InputFloating name={"PROY_INDICADOR_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_INDICADOR_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_INDICADOR_GENERAL_SPECIFY : data.PROY_INDICADOR_GENERAL} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <InputFloating name={"PROY_LINEA_BASE_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Linea base" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_LINEA_BASE_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_LINEA_BASE_GENERAL_SPECIFY : data.PROY_LINEA_BASE_GENERAL} />
                                </div>
                                <div className="col-lg-3">
                                    <InputFloating name={"PROY_META_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Meta" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_META_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_META_GENERAL_SPECIFY : data.PROY_META_GENERAL} />
                                </div>
                                <div className="col-lg-6">
                                    <InputFloating name={"PROY_ENTREGABLE_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_ENTREGABLE_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_ENTREGABLE_GENERAL_SPECIFY : data.PROY_ENTREGABLE_GENERAL} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <InputFloating name={"PROY_MES_INICIO_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_MES_INICIO_GENERAL_SPECIFY : data.PROY_MES_INICIO_GENERAL} />
                                </div>
                                <div className="col-lg-3">
                                    <InputFloating name={"PROY_MES_FINAL_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_MES_FINAL_GENERAL_SPECIFY : data.PROY_MES_FINAL_GENERAL} />
                                </div>
                                <div className="col-lg-6">
                                    <TextArea name={"PROY_DESCRIPCION_ENTREGABLE_GENERAL" + (isSpecify ? "_SPECIFY" : "")} label="Descripción del entregable" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL" + (isSpecify ? "_SPECIFY" : ""), value)} value={isSpecify ? data.PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY : data.PROY_DESCRIPCION_ENTREGABLE_GENERAL} />
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <>
                            {
                                isSpecify ?
                                    (
                                        <>
                                            {/* -	TEXT objetivo especifico
                                            -	DESCRIPCION
                                            -	INDICADOR
                                            -	RESULTADO ESPERADO
                                            -	FECHA INICIAL
                                            -	FECHA FINAL */}

                                            <div className="row mt-4">
                                                <div className="col-lg-12">
                                                    <InputFloating name={"PROY_OBJETIVO_ESPECIFICO"} label="Objetivo especifico*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_ESPECIFICO", value)} value={data.PROY_OBJETIVO_ESPECIFICO} isInvalid={!data.PROY_OBJETIVO_ESPECIFICO && errorInputs} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <InputFloating name={"PROY_DESCRIPCION_GENERAL_SPECIFY"} label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_GENERAL_SPECIFY", value)} value={data.PROY_DESCRIPCION_GENERAL_SPECIFY} />
                                                </div>
                                                <div className="col-lg-6">
                                                    <InputFloating name={"PROY_INDICADOR_GENERAL_SPECIFY"} label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_INDICADOR_GENERAL_SPECIFY", value)} value={data.PROY_INDICADOR_GENERAL_SPECIFY} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <InputFloating name={"PROY_RESULTADO_ESPERADO_SPECIFY"} label="Resultado esperado" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_RESULTADO_ESPERADO_SPECIFY", value)} value={data.PROY_RESULTADO_ESPERADO_SPECIFY} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <InputFloating name={"PROY_MES_INICIO_GENERAL_SPECIFY"} label="Inicío*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL_SPECIFY", value)} value={data.PROY_MES_INICIO_GENERAL_SPECIFY} isInvalid={!data.PROY_MES_INICIO_GENERAL_SPECIFY && errorInputs} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <InputFloating name={"PROY_MES_FINAL_GENERAL_SPECIFY"} label="Fín*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL_SPECIFY", value)} value={data.PROY_MES_FINAL_GENERAL_SPECIFY} isInvalid={!data.PROY_MES_FINAL_GENERAL_SPECIFY && errorInputs} />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* 	Justificación o antecedentes del proyecto
                                                	FECHA ESPERADA INICIO
                                                	FECHA ESPERADA FINAL
                                                	TEXT objetivo general proyecto (Ambos)
                                                	MESES */}

                                            <div className="row mt-4">
                                                <div className="col-lg-12">
                                                    <InputFloating label="Digite la justificación o antecedentes del proyecto*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION", value)} value={data.PROY_JUSTIFICACION} isInvalid={!data.PROY_JUSTIFICACION && errorInputs} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <InputFloating label="Inicío*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_INICIO", value)} value={data.PROY_FECHA_ESPERADA_INICIO} isInvalid={!data.PROY_FECHA_ESPERADA_INICIO && errorInputs} />
                                                </div>
                                                <div className="col-lg-5">
                                                    <InputFloating label="Fín*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_TERMINADA", value)} value={data.PROY_FECHA_ESPERADA_TERMINADA} isInvalid={!data.PROY_FECHA_ESPERADA_TERMINADA && errorInputs} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <InputFloating label="Meses*" className="mb-3 inputFloating" type="number" setValueChange={(value: number) => setValueByIndex("PROY_DURACION_ESTIMADA_MESES", value)} value={data.PROY_DURACION_ESTIMADA_MESES} isInvalid={!data.PROY_DURACION_ESTIMADA_MESES && errorInputs} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <TextArea label="Objetivo general del proyecto" value={data.PROY_OBJETIVO_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} />
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </>
                    )
            }
        </>
    )
}