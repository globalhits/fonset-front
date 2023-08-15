import {Col, Row} from "react-bootstrap"
// --- Components project ---
import { RequestInvertionDto } from "../../../models/invertion/RequestInvertionDto";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { InvertionSelector, setDataInvertion } from "../../../redux/states/invertion/invertion.slice";
import InputFloating from "../../atoms/input/Input";


const OriginProject: React.FC<any> = ({ }) => {

    const { data } = useAppSelector(InvertionSelector);

    const dispatch = useAppDispatch();

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestInvertionDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataInvertion(updatedRequest));
    }

    return (
        <>
            <Row sm={12}>
                <Col sm={12}>
                    <h6>Procedencia del proyecto <span className="text-red">*</span></h6>
                </Col>
            </Row>
            <Row sm={12}>
                <Col sm={3}>
                    <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" setValueChange={(value: any) => setValueByIndex("PROY_CODIGO", value)} value={data.PROY_CODIGO} disabled={true} />
                </Col>
                <Col sm={3}>
                    <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" setValueChange={(value: Date) => setValueByIndex("PROY_FECHA", value)} value={data.PROY_FECHA} disabled={true} />
                </Col>
                <Col sm={12}>
                    <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_NOMBRE", value)} value={data.PROY_NOMBRE} />
                </Col>
            </Row>
        </>
    )
}

export default OriginProject;