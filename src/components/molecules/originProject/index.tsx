
// --- Components project ---
import { RequestInvertionDto } from "../../../models/invertion/RequestInvertionDto";
import InputFloating from "../../atoms/input/Input";

interface OriginProjectInterface {
    formData: RequestInvertionDto,
    setFormData: Function,
}

const OriginProject: React.FC<OriginProjectInterface> = ({ formData, setFormData }) => {


    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestInvertionDto = {};

        updatedRequest = {
            ...formData,
            [index]: value
        }

        setFormData(updatedRequest);
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
                    <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" setValueChange={(value: any) => setValueByIndex("PROY_CODIGO", value)} value={formData.PROY_CODIGO} disabled={true} />
                </div>
                <div className="col-lg-3">
                    <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" setValueChange={(value: Date) => setValueByIndex("PROY_FECHA", value)} value={formData.PROY_FECHA} disabled={true} />
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_NOMBRE", value)} value={formData.PROY_NOMBRE} />
                </div>
            </div>
        </>
    )
}

export default OriginProject;