import { Col, Row } from "react-bootstrap";

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

    const setValueByIndex = (index: keyof RequestCooperativeDto, value: any) => {
        let updatedRequest: RequestCooperativeDto = {
            ...data,
            [index]: value,
        };
    
        dispatch(setDataCooperative(updatedRequest));
    };

    return (
        <>
            <Row>
                <Col sm={12}>
                    <InputFloating name="PRCI_JUSTIFICACION" label="Justificación o antecedentes del proyecto" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PRCI_JUSTIFICACION", value)} value={data.PRCI_JUSTIFICACION}  />
                </Col>
            </Row>

            <Row sm={12}>
                <Col sm={4}>
                    <InputFloating name="PRCI_FECHA_ESPERADA_INICIO" label="Fecha espera de inicio" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PRCI_FECHA_ESPERADA_INICIO", value)} value={data.PRCI_FECHA_ESPERADA_INICIO} />
                </Col>
                <Col sm={4}>
                    <InputFloating  name="PRCI_FECHA_ESPERADA_TERMINADA" label="Fecha espera terminada" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => setValueByIndex("PRCI_FECHA_ESPERADA_TERMINADA", value)} value={data.PRCI_FECHA_ESPERADA_TERMINADA} />
                </Col>
                <Col sm={4}>
                    <InputFloating  name="PRCI_DURACION_ESTIMADA_MESES" label="Duracion estimada en meses" className="mb-3 inputFloating" type="number" setValueChange={(value: number) => setValueByIndex("PRCI_DURACION_ESTIMADA_MESES", value.toString())} value={data.PRCI_DURACION_ESTIMADA_MESES.toString()}   />
                </Col>
            </Row>
            <Row >
                <Col sm={12}>
                    <TextArea name="PRCI_OBJETIVO_GENERAL" label="Escriba aqui el objetivo general del proyecto" setValueChange={(value: string) => setValueByIndex("PRCI_OBJETIVO_GENERAL", value)} value={data.PRCI_OBJETIVO_GENERAL}/>
                </Col>
            </Row>
        </>
    )
}

export default FormObjGeneralCoop