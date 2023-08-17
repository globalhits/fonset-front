import { Col, Row } from "react-bootstrap"
// --- Components project ---
import { RequestDto } from "../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../redux/states/generals/general.slice";
import InputFloating from "../../atoms/input/Input";


const OriginProject: React.FC<any> = ({ }) => {

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const dispatch = useAppDispatch();

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
            <Row sm={12}>
                <Col sm={12}>
                    <h6>Procedencia del proyecto <span className="text-red">*</span></h6>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" setValueChange={(value: any) => setValueByIndex("PROY_CODIGO", value)} value={data.PROY_CODIGO} disabled={true} isInvalid={!data.PROY_CODIGO && errorInputs} />
                </Col>
                <Col sm={3}>
                    <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" setValueChange={(value: Date) => setValueByIndex("PROY_FECHA", value)} value={data.PROY_FECHA} disabled={true} isInvalid={!data.PROY_FECHA && errorInputs} />
                </Col>
                <Col sm={6}>
                    <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_NOMBRE", value)} value={data.PROY_NOMBRE} isInvalid={!data.PROY_NOMBRE && errorInputs} />
                </Col>
            </Row>
        </>
    )
}

export default OriginProject;