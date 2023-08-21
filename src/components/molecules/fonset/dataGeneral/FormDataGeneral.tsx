import React, {useState} from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";

import { RequestDto } from "../../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";

import "./FormDataGeneral.scss"

interface FormDataGeneralCoopInterface {
    formData?: RequestDto
}

const FormDataGeneral: React.FC<FormDataGeneralCoopInterface> = ({ formData }) => {
    const [departaments, setDepartaments] = useState([]);

    const [municipalities, setMunicipalities] = useState([]);

    const [dependenciesResponsible, setdependenciesResponsible] = useState([]);

    const [judicialDistricts, setJudicialDistricts] = useState([]);

    // INPUT

    const [departament, setDepartament] = useState("");

    const [municipality, setMunicipality] = useState("");

    const [dependencyResponsible, setdependencyResponsible] = useState("");

    const [judicialDistrict, setJudicialDistrict] = useState("");

     const dispatch = useAppDispatch();

    const { data } = useAppSelector(GeneralSelector);


    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    const addItem = () => {

    }

    return ( 
        <div className="containerInfo">
            <div className="col-lg-4 ">
                <InputFloating name="PROY_SUB_REGIONAL_APOYO" label="Sub. regional apoyo*" type="text" placeholder="" className="mb-3 InputSelected" setValueChange={(value: string) => setValueByIndex("PROY_SUB_REGIONAL_APOYO", value)} value={data.PROY_SUB_REGIONAL_APOYO} />
                <InputFloating name="PROY_SECCIONAL" label="Seccional*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => setValueByIndex("PROY_SECCIONAL", value)} value={data.PROY_SECCIONAL} />
            </div>
            <div className="col-lg-4 ">
                <InputSelected label="Departamento*" options={departaments} onChange={(value: any) => setDepartament(value)} value=""/>
                <InputSelected label="Municipio de origen*" options={municipalities} onChange={(value: any) => setMunicipality(value)} value="" />
            </div>
            <div className="col-lg-4 ">
                <InputSelected label="Entidad dependencia responsable*" options={dependenciesResponsible} onChange={(value: any) => setdependencyResponsible(value)} value=""/>
                <InputSelected label="Distrito judicial*" options={judicialDistricts} onChange={(value: any) => setJudicialDistrict(value)} value="" />
            </div>
        </div>
    )
}

export default FormDataGeneral;