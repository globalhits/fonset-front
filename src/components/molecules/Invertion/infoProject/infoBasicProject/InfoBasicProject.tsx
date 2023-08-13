import { Table } from "react-bootstrap"
import InputFloating from "../../../../atoms/input/Input"
import Buttons from "../../../../atoms/button/Buttons";
import { RequestInvertionDto } from "../../../../../models/invertion/RequestInvertionDto";

interface InfoBasicProjectInterface {
    formData: RequestInvertionDto,
    setFormData: Function
}

const InfoBasicProject = ({ formData, setFormData }: InfoBasicProjectInterface) => {

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestInvertionDto = {};

        updatedRequest = {
            ...formData,
            [index]: value
        }

        setFormData(updatedRequest);
    }

    return (
        <div className="row">
            <h4>Justificación o antecedentes del proyecto</h4>
            <div className="row mt-4 mb-3">
                <div className="col-lg-12">
                    <InputFloating name="PROY_JUSTIFICACION_ANTECEDENTES" label="Digite la justificación" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION_ANTECEDENTES", value)} value={formData.PROY_JUSTIFICACION_ANTECEDENTES} />
                </div>
            </div>
            <hr />
            <h4>Población objetivo</h4>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <InputFloating name="PROY_POBLACION_AFECTADA" label="Población afectada por el problema" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_POBLACION_AFECTADA", value)} value={formData.PROY_POBLACION_AFECTADA} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <InputFloating name="PROY_POBLACION_OBJETO" label="Población objeto de la intervención" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_POBLACION_OBJETO", value)} value={formData.PROY_POBLACION_OBJETO} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <InputFloating label="Caracteristicas demograficas de la población objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_CARACTERISTICAS_DEMOGRAFICAS", value)} value={formData.PROY_CARACTERISTICAS_DEMOGRAFICAS} />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-6">
                    <h4>Analisis de participantes</h4>
                </div>
                <div className="col-lg-6 text-right">
                    <Buttons variant="primary" label="Añadir" onClick={() => { }} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <Table className="table table-bordered table-condensed table-stripe">
                        <thead>
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default InfoBasicProject;