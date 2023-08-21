import { RequestDto } from "../../../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../../redux/states/generals/general.slice";
import TextArea from "../../../../atoms/area/TextArea"
import { Row, Col } from "react-bootstrap";
import InputFloating from "../../../../atoms/input/Input"

interface GeneralObjectiveInterface {
    type?: string;
}

export const GeneralObjective = ({ type }: GeneralObjectiveInterface) => {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(GeneralSelector)

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
        {type === "invertion" ? (
            <>
           <Row>
                <Col sm={12}>
                    <InputFloating name="PROY_JUSTIFICACION" label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION", value)} value={data.PROY_JUSTIFICACION} />
                </Col>
            </Row>

            <Row sm={12}>
                <Col sm={4}>
                    <InputFloating name="PROY_FECHA_ESPERADA_INICIO" label="Fecha espera de inicio" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_INICIO", value)} value={data.PROY_FECHA_ESPERADA_INICIO} />
                </Col>
                 <Col sm={4}>
                    <InputFloating name="PROY_FECHA_ESPERADA_TERMINADA" label="Fecha espera terminada" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_TERMINADA", value)} value={data.PROY_FECHA_ESPERADA_TERMINADA} />
                 </Col>
                 <Col sm={4}>
                     <InputFloating name="PROY_DURACION_ESTIMADA_MESES" label="Duracion estimada en meses" className="mb-3 inputFloating" type="number" setValueChange={(value: number) => setValueByIndex("PROY_DURACION_ESTIMADA_MESES", value)} value={data.PROY_DURACION_ESTIMADA_MESES} />
                 </Col>
             </Row>
       <Row >
           <Col sm={12}>
               <TextArea name="PROY_OBJETIVO_GENERAL" label="Escriba aqui el objetivo general del proyecto" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} />
           </Col>
       </Row>
       </>
            ):(
            
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

                    {type === "invertion" ? (
                        <>
                            <div className="col-lg-6">
                                <InputFloating label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_ENTREGABLE_GENERAL", value)} value={data.PROY_ENTREGABLE_GENERAL} />
                            </div>
                        </>
                    ) : (
                        <div className="col-lg-3">
                            <InputFloating label="Resultado esperado" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_RESULTADO_ESPERADO", value)} value={data.PROY_RESULTADO_ESPERADO} />
                        </div>
                    )}
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <InputFloating label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_INICIO_GENERAL", value)} value={data.PROY_MES_INICIO_GENERAL} />
                    </div>
                    <div className="col-lg-3">
                        <InputFloating label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_MES_FINAL_GENERAL", value)} value={data.PROY_MES_FINAL_GENERAL} />
                    </div>
                    {type === "invertion" ? (
                        <>
                            <div className="col-lg-6">
                                <TextArea label="Descripción del entregable" value={data.PROY_DESCRIPCION_ENTREGABLE_GENERAL} setValueChange={(value: string) => setValueByIndex("PROY_DESCRIPCION_ENTREGABLE_GENERAL", value)} />
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                {
                    type === "invertion" ? (
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <InputFloating label="Archivo" className="mb-3 inputFloating" type="file" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} />
                            </div>
                        </div>
                    ) :
                        <></>
                }
            </>
            
            )}
        </>
    )
}