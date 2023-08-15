
// --- Components project ---
import { RequestDto } from "../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { InvertionSelector, setDataInvertion } from "../../../redux/states/invertion/invertion.slice";
import InputFloating from "../../atoms/input/Input";


const OriginProject: React.FC<any> = ({ }) => {

    const { data } = useAppSelector(InvertionSelector);

    const dispatch = useAppDispatch();

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataInvertion(updatedRequest));
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h6>Procedencia del proyecto <span className="text-red">*</span></h6>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" setValueChange={(value: any) => setValueByIndex("PROY_CODIGO", value)} value={data.PROY_CODIGO} disabled={true} />
                </div>
                <div className="col-lg-3">
                    <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" setValueChange={(value: Date) => setValueByIndex("PROY_FECHA", value)} value={data.PROY_FECHA} disabled={true} />
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_NOMBRE", value)} value={data.PROY_NOMBRE} />
                </div>
            </div>
        </>
    )
}

export default OriginProject;