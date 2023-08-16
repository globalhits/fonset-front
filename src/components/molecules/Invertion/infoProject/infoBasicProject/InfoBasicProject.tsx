import InputFloating from "../../../../atoms/input/Input"
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { RequestDto } from "../../../../../models/general/RequestDto";
import PeopleTable from "./peoples/table/PeopleTable";
import { GeneralSelector, setDataGeneral } from "../../../../../redux/states/generals/general.slice";

const InfoBasicProject = () => {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(GeneralSelector)

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    return (
        <div className="row mt-4">
            <h4 style={{ fontWeight: "normal", fontSize: "20px" }}><span className="text-red">*</span>Justificación o antecedentes del proyecto<span className="text-red">*</span></h4>
            <div className="row mt-4 mb-3">
                <div className="col-lg-12">
                    <InputFloating name="PROY_JUSTIFICACION_ANTECEDENTES" label="Digite la justificación" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_JUSTIFICACION_ANTECEDENTES", value)} value={data.PROY_JUSTIFICACION_ANTECEDENTES} />
                </div>
            </div>
            <hr />
            <h4 style={{ fontWeight: "normal", fontSize: "20px" }}><span className="text-red">*</span>Población objetivo<span className="text-red">*</span></h4>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <InputFloating name="PROY_POBLACION_AFECTADA" label="Población afectada por el problema" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_POBLACION_AFECTADA", value)} value={data.PROY_POBLACION_AFECTADA} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <InputFloating name="PROY_POBLACION_OBJETO" label="Población objeto de la intervención" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_POBLACION_OBJETO", value)} value={data.PROY_POBLACION_OBJETO} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <InputFloating label="Caracteristicas demograficas de la población objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setValueByIndex("PROY_CARACTERISTICAS_DEMOGRAFICAS", value)} value={data.PROY_CARACTERISTICAS_DEMOGRAFICAS} />
                </div>
            </div>
            <hr />
            <PeopleTable />
        </div>
    )
}

export default InfoBasicProject;