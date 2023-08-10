
// --- Components project ---
import InputFloating from "../../atoms/input/Input";

export default function OriginProject() {

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h6>Procedencia del proyecto</h6>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" placeholder="1234" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" placeholder="Fecha" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" setValueChange={(value: string) => { }} value="" />
                </div>
            </div>
        </>

    )
}