import { Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import InputFloating from "../../atoms/input/Input";
import InfoBasic from "../infoBasic/index";

export default function OriginProject() {

    return (
        <div className="container">
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="PROCEDENCIA DEL PROYECTO">
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
                </Tab>

                <Tab eventKey="basic" title="INFORMACIÓN BÁSICA">
                    <InfoBasic />
                </Tab>

            </Tabs>
        </div>
    )
}