import { Col, Row } from "react-bootstrap";

import InputFloating from "../../../atoms/input/Input";
import TextArea from "../../../atoms/area/TextArea";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RequestDto } from "../../../../models/general/RequestDto";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";

interface ObjGeneralCoopInterface {
    formData: RequestDto,
    setFormData: Function
}

const FormObjGeneralCoop = ({ formData, setFormData }: ObjGeneralCoopInterface) => {

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
            <Row>
                <Col sm={12}>
                    <InputFloating name="PROY_JUSTIFICACION" label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION", value)} value={data.PROY_JUSTIFICACION}  />
                </Col>
            </Row>

            <Row sm={12}>
                <Col sm={4}>
                    <InputFloating name="PROY_FECHA_ESPERADA_INICIO" label="Fecha espera de inicio" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_INICIO", value)} value={data.PROY_FECHA_ESPERADA_INICIO} />
                </Col>
                <Col sm={4}>
                    <InputFloating  name="PROY_FECHA_ESPERADA_TERMINADA" label="Fecha espera terminada" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PROY_FECHA_ESPERADA_TERMINADA", value)} value={data.PROY_FECHA_ESPERADA_TERMINADA} />
                </Col>
                <Col sm={4}>
                    <InputFloating  name="PROY_DURACION_ESTIMADA_MESES" label="Duracion estimada en meses" className="mb-3 inputFloating" type="number" setValueChange={(value: number) => setValueByIndex("PROY_DURACION_ESTIMADA_MESES", value)} value={data.PROY_DURACION_ESTIMADA_MESES}   />
                </Col>
            </Row>
            <Row >
                <Col sm={12}>
                    <TextArea name="PROY_OBJETIVO_GENERAL" label="Escriba aqui el objetivo general del proyecto" setValueChange={(value: string) => setValueByIndex("PROY_OBJETIVO_GENERAL", value)} value={data.PROY_OBJETIVO_GENERAL}/>
                </Col>
            </Row>
        </>
    )
}

export default FormObjGeneralCoop