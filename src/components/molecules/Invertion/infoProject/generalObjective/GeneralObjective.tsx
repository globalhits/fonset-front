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
            {
                type !== "cooperative" ?
                    (
                        <>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <InputFloating label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_GENERAL", value)} value={data.PROY_DESCRIPCION_GENERAL} />
                                </div>
                                <div className="col-lg-6">
                                    <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_INDICADOR_GENERAL", value)} value={data.PROY_INDICADOR_GENERAL} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <InputFloating label="Linea base" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_LINEA_BASE_GENERAL", value)} value={data.PROY_LINEA_BASE_GENERAL} />
                                </div>
                                <div className="col-lg-3">
                                    <InputFloating label="Meta" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_META_GENERAL", value)} value={data.PROY_META_GENERAL} />
                                </div>
                                <div className="col-lg-6">
                                    <InputFloating label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_ENTREGABLE_GENERAL", value)} value={data.PROY_ENTREGABLE_GENERAL} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">

                                    <InputFloating label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL", value)} value={data.PROY_MES_INICIO_GENERAL} />

                                </div>
                                <div className="col-lg-3">

                                    <InputFloating label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL", value)} value={data.PROY_MES_FINAL_GENERAL} />

                                </div>
                                <div className="col-lg-6">
                                    <TextArea label="Descripción del entregable" value={data.PROY_DESCRIPCION_ENTREGABLE_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL", value)} />
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <InputFloating label="Digite la justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION_ANTECEDENTES", value)} value={data.PROY_JUSTIFICACION_ANTECEDENTES} isInvalid={!data.PROY_JUSTIFICACION_ANTECEDENTES && errorInputs} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <InputFloating label="Inicío" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_INICIO", value)} value={data.PROY_FECHA_ESPERADA_INICIO} isInvalid={!data.PROY_FECHA_ESPERADA_INICIO && errorInputs} />
                                </div>
                                <div className="col-lg-5">
                                    <InputFloating label="Fín" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_TERMINADA", value)} value={data.PROY_FECHA_ESPERADA_TERMINADA} isInvalid={!data.PROY_FECHA_ESPERADA_TERMINADA && errorInputs} />
                                </div>
                                <div className="col-lg-3">
                                    <InputFloating label="Duración en meses" className="mb-3 inputFloating" type="number" setValueChange={(value: number) => setValueByIndex("PROY_DURACION_ESTIMADA_MESES", value)} value={data.PROY_DURACION_ESTIMADA_MESES} isInvalid={!data.PROY_DURACION_ESTIMADA_MESES && errorInputs} />
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

            {/* {
                type === "specific" ? (
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <InputFloating label="Archivo" className="mb-3 inputFloating" type="file" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} />
                        </div>
                    </div>
                ) :
                    <></>
            } */}
        </>
    )
}