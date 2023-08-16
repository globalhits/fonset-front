import { RequestDto } from "../../../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../../redux/states/generals/general.slice";
import TextArea from "../../../../atoms/area/TextArea"
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
            {
                type === "specific" ? (
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <InputFloating label="Archivo" className="mb-3 inputFloating" type="file" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL} />
                        </div>
                    </div>
                ) :
                    <></>
            }
        </>
    )
}