import InputFloating from "../../../atoms/input/Input";
import TextArea from "../../../atoms/area/TextArea";

import { RequestCooperativeDto } from "../../../../models/cooperative/RequestCooperativeDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { CooperativeSelector, setDataCooperative } from "../../../../redux/states/cooperation/cooperation.slice";

interface ObjGeneralCoopInterface {
    formData: RequestCooperativeDto,
    setFormData: Function
}

const FormObjGeneralCoop = ({ formData, setFormData }: ObjGeneralCoopInterface) => {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(CooperativeSelector)

    const setValueByIndex = (index: any, value: any) => {
        /* let updatedRequest: RequestCooperativeDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataCooperative(updatedRequest)); */
    }

    return (
        <>
            <div className="row mt-2">
                <div className="col-lg-12">
                    <InputFloating name="PRCI_JUSTIFICACION" label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PRCI_JUSTIFICACION", value)} value={data.PRCI_JUSTIFICACION}  />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <InputFloating name="PRCI_FECHA_ESPERADA_INICIO" label="Fecha espera de inicio" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PRCI_FECHA_ESPERADA_INICIO", value)} value={data.PRCI_FECHA_ESPERADA_INICIO} />
                </div>
                <div className="col-lg-4">
                    <InputFloating  name="PRCI_FECHA_ESPERADA_TERMINADA" label="Fecha espera terminada" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PRCI_FECHA_ESPERADA_TERMINADA", value)} value={data.PRCI_FECHA_ESPERADA_TERMINADA} />
                </div>
                <div className="col-lg-4">
                    <InputFloating  name="PRCI_DURACION_ESTIMADA_MESES" label="Duracion estimada en meses" className="mb-3 inputFloating" type="number" setValueChange={(value: string) => setValueByIndex("PRCI_DURACION_ESTIMADA_MESES", value)} value={""}   />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-16">
                    <TextArea name="PRCI_OBJETIVO_GENERAL" label="Escriba aqui el objetivo general del proyecto" />
                </div>
            </div>
        </>
    )
}

export default FormObjGeneralCoop