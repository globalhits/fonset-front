
// --- Components project ---
import { RequestInvertionDto } from "../../../models/invertion/RequestInvertionDto";
import InputFloating from "../../atoms/input/Input";

interface OriginProjectInterface {
    formData: RequestInvertionDto
}

const OriginProject: React.FC<OriginProjectInterface> = ({ formData }) => {



    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h6>Procedencia del proyecto</h6>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" setValueChange={(value: string) => { }} value="" readOnly={true} />
                </div>
                <div className="col-lg-4">
                    <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                </div>
            </div>
        </>
    )
}

export default OriginProject;