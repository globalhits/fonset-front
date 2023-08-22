import React,{useState} from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";

import { RequestDto } from "../../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";

interface FormDataGeneralInterface {
    formData?: RequestDto
}

const FormDataGeneral: React.FC<FormDataGeneralInterface> = ({ formData }) => {

    const [departaments, setDepartaments] = useState([]);

    const [municipalitiesOrigin, setMunicipalitiesOrigin] = useState([]);

    const [entityDependenciesResponsible, setEntityDependenciesResponsible] = useState([]);

    const [judicialDistritos, setJudicialDistritos] = useState([]);

    // INPUT

    const [departament, setDepartament] = useState("");

    const [municipalityOrigin, setMunicipalityOrigin] = useState("");

    const [entityDependencyResponsible, setEntityDependencyResponsible] = useState("");

    const [judicialDistrict, setJudicialDistrict] = useState("");


    const dispatch = useAppDispatch();

    const { data, errorInputs } = useAppSelector(GeneralSelector)

    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }
    return (
        <div className="containerInfo">
            <div className="col-lg-4 ">
                <InputFloating name="sub-regional-apoyo"label="Sub. regional apoyo*"  className="mb-3 InputSelected" type="text" setValueChange={(value: any) => setValueByIndex("PROY_SUB_REGIONAL_APOYO", value)} value={data.PROY_SUB_REGIONAL_APOYO} isInvalid={!data.PROY_SUB_REGIONAL_APOYO && errorInputs}/>
                <InputFloating name="seccional" label="Seccional*" className="mb-3 inputFloating" type="text" setValueChange={(value: any) => setValueByIndex("PROY_SECCIONAL", value)} value={data.PROY_SECCIONAL} isInvalid={!data.PROY_SECCIONAL && errorInputs}/>
            </div>
            <div className="col-lg-4 ">
                <InputSelected  label="Departamento*" options={departaments} onChange={(value: any) => setDepartament(value)} value="" />
                <InputSelected  label="Municipio de origen*" options={municipalitiesOrigin} onChange={(value: any) => setMunicipalityOrigin(value)} value="" />
            </div>
            <div className="col-lg-4 ">
                <InputSelected  label="Entidad dependencia responsable*" options={entityDependenciesResponsible} onChange={(value: any) => setEntityDependencyResponsible(value)} value="" />
                <InputSelected  label="Distrito judicial*" options={judicialDistritos} onChange={(value: any) => setJudicialDistrict(value)} value="" />
            </div>
        </div>
    )
}

export default FormDataGeneral;