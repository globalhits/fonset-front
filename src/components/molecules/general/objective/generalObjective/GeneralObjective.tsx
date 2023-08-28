import { RequestDto } from "../../../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../../redux/states/generals/general.slice";
import TextArea from "../../../../atoms/area/TextArea"
import { Row, Col } from "react-bootstrap";
import InputFloating from "../../../../atoms/input/Input"
import { useEffect } from "react";

interface GeneralObjectiveInterface {
    type?: string;
    isSpecify?: boolean;
    viewDetail?: boolean;
}

export const GeneralObjective = ({ type, isSpecify = false, viewDetail = false }: GeneralObjectiveInterface) => {

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

    useEffect(() => {
    }, [data.PROY_ACTIVIDADES_FILTERS])

    return (
        <>
            <div className="row mt-4">
                <h5>Información General <span className="text-danger">*</span></h5>
            </div>
            {
                type !== "cooperative" ?
                    (
                        isSpecify ? (
                            viewDetail ? (
                                <>
                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.OBJETIVO?.trim()} label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.OBJETIVO} disabled={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.DESCRIPCION?.trim()} label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.DESCRIPCION} disabled={true} />
                                        </div>
                                        <div className="col-lg-6">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.INDICADOR?.trim()} label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.INDICADOR} disabled={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.LINEA_BASE?.trim()} label="Linea base" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.LINEA_BASE} disabled={true} />
                                        </div>
                                        <div className="col-lg-3">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.META?.trim()} label="Meta" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.META} disabled={true} />
                                        </div>
                                        <div className="col-lg-6">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.ENTREGABLE?.trim()} label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.ENTREGABLE} disabled={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.MES_FINAL?.trim()} label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.MES_FINAL} disabled={true} />
                                        </div>
                                        <div className="col-lg-3">
                                            <InputFloating name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.MES_FINAL?.trim()} label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.MES_FINAL} disabled={true} />
                                        </div>
                                        <div className="col-lg-6">
                                            <TextArea name={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.DESCRIPCION_ENTREGABLE?.trim()} label="Descripción del entregable" setValueChange={(value: string) => { }} value={data.PROY_OBJETIVOS_ESPECIFICOS_FILTERS?.DESCRIPCION_ENTREGABLE} disabled={true} />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <InputFloating label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL_SPECIFY", value)} value={data.PROY_OBJETIVO_GENERAL_SPECIFY} disabled={false} />
                                        </div >
                                    </div >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_GENERAL_SPECIFY", value)} value={data.PROY_DESCRIPCION_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                        <div className="col-lg-6">
                                            <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_INDICADOR_GENERAL_SPECIFY", value)} value={data.PROY_INDICADOR_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <InputFloating label="Linea base" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_LINEA_BASE_GENERAL_SPECIFY", value)} value={data.PROY_LINEA_BASE_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                        <div className="col-lg-3">
                                            <InputFloating label="Meta" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_META_GENERAL_SPECIFY", value)} value={data.PROY_META_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                        <div className="col-lg-6">
                                            <InputFloating label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_ENTREGABLE_GENERAL_SPECIFY", value)} value={data.PROY_ENTREGABLE_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <InputFloating label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL_SPECIFY", value)} value={data.PROY_MES_INICIO_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                        <div className="col-lg-3">
                                            <InputFloating label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL_SPECIFY", value)} value={data.PROY_MES_FINAL_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                        <div className="col-lg-6">
                                            <TextArea label="Descripción del entregable" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY", value)} value={data.PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY} disabled={false} />
                                        </div>
                                    </div>
                                </>
                            )
                        ) : (
                            <>
                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                        <InputFloating label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} isInvalid={errorInputs && !data.PROY_OBJETIVO_GENERAL} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_GENERAL", value)} value={data.PROY_DESCRIPCION_GENERAL} isInvalid={errorInputs && !data.PROY_DESCRIPCION_GENERAL} />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_INDICADOR_GENERAL", value)} value={data.PROY_INDICADOR_GENERAL} isInvalid={errorInputs && !data.PROY_INDICADOR_GENERAL} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <InputFloating label="Linea base" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_LINEA_BASE_GENERAL", value)} value={data.PROY_LINEA_BASE_GENERAL} isInvalid={errorInputs && !data.PROY_LINEA_BASE_GENERAL} />
                                    </div>
                                    <div className="col-lg-3">
                                        <InputFloating label="Meta" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_META_GENERAL", value)} value={data.PROY_META_GENERAL} isInvalid={errorInputs && !data.PROY_META_GENERAL} />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputFloating label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_ENTREGABLE_GENERAL", value)} value={data.PROY_ENTREGABLE_GENERAL} isInvalid={errorInputs && !data.PROY_ENTREGABLE_GENERAL} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <InputFloating label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL", value)} value={data.PROY_MES_INICIO_GENERAL} isInvalid={errorInputs && !data.PROY_MES_INICIO_GENERAL} />
                                    </div>
                                    <div className="col-lg-3">
                                        <InputFloating label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL", value)} value={data.PROY_MES_FINAL_GENERAL} isInvalid={errorInputs && !data.PROY_MES_FINAL_GENERAL} />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextArea label="Descripción del entregable" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL", value)} value={data.PROY_DESCRIPCION_ENTREGABLE_GENERAL} isInvalid={errorInputs && !data.PROY_DESCRIPCION_ENTREGABLE_GENERAL} />
                                    </div>
                                </div>
                            </>
                        )
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
                                                    <InputFloating label="Objetivo especifico*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL_SPECIFY", value)} value={data.PROY_OBJETIVO_GENERAL_SPECIFY} disabled={viewDetail} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_GENERAL_SPECIFY", value)} value={data.PROY_DESCRIPCION_GENERAL_SPECIFY} disabled={viewDetail} />
                                                </div>
                                                <div className="col-lg-6">
                                                    <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_INDICADOR_GENERAL_SPECIFY", value)} value={data.PROY_INDICADOR_GENERAL_SPECIFY} disabled={viewDetail} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <InputFloating label="Resultado esperado" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_RESULTADO_ESPERADO_SPECIFY", value)} value={data.PROY_RESULTADO_ESPERADO_SPECIFY} disabled={viewDetail} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <InputFloating label="Inicío*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL_SPECIFY", value)} value={data.PROY_MES_INICIO_GENERAL_SPECIFY} isInvalid={!data.PROY_MES_INICIO_GENERAL_SPECIFY && errorInputs} disabled={viewDetail} />
                                                </div>
                                                <div className="col-lg-3">
                                                    <InputFloating label="Fín*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL_SPECIFY", value)} value={data.PROY_MES_FINAL_GENERAL_SPECIFY} isInvalid={!data.PROY_MES_FINAL_GENERAL_SPECIFY && errorInputs} disabled={viewDetail} />
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
                                                    <InputFloating label="Digite la justificación o antecedentes del proyecto*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION", value)} value={data.PROY_JUSTIFICACION} isInvalid={!data.PROY_JUSTIFICACION && errorInputs} disabled={viewDetail} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <InputFloating label="Inicío*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_INICIO", value)} value={data.PROY_FECHA_ESPERADA_INICIO} isInvalid={!data.PROY_FECHA_ESPERADA_INICIO && errorInputs} disabled={viewDetail} />
                                                </div>
                                                <div className="col-lg-5">
                                                    <InputFloating label="Fín*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_TERMINADA", value)} value={data.PROY_FECHA_ESPERADA_TERMINADA} isInvalid={!data.PROY_FECHA_ESPERADA_TERMINADA && errorInputs} disabled={viewDetail} />
                                                </div>
                                                <div className="col-lg-2">
                                                    <InputFloating label="Meses*" className="mb-3 inputFloating" type="number" setValueChange={(value: number) => setValueByIndex("PROY_DURACION_ESTIMADA_MESES", value)} value={data.PROY_DURACION_ESTIMADA_MESES} isInvalid={!data.PROY_DURACION_ESTIMADA_MESES && errorInputs} disabled={viewDetail} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <TextArea label="Objetivo general del proyecto" value={data.PROY_OBJETIVO_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} disabled={viewDetail} isInvalid={errorInputs && !data.PROY_OBJETIVO_GENERAL} />
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