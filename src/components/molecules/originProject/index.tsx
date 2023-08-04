import { Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import InputFloating from "../../atoms/input/Input";
import InfoBasic from "../Invertion/infoBasic/index";
import Entities from "./entities";

export default function OriginProject() {

    return (
        <div className="row mt-3">
            <div className="col-lg-4">
                <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" placeholder="1234" />
            </div>
            <div className="col-lg-4">
                <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" placeholder="Fecha" />
            </div>
            <div className="col-lg-4">
                <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
            </div>
        </div>
    )
}