import React, { useState, useEffect } from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";

import { RequestDto } from "../../../../models/general/RequestDto";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { GeneralSelector, setDataGeneral } from "../../../../redux/states/generals/general.slice";
import { DepartamentSelector, fetchApiDepartament } from "../../../../redux/states/generals/departament.slice";
import { MunicipalitySelector, fetchApiMunicipality, findByDepartamentId } from "../../../../redux/states/generals/municipality.slice";
import { DependencySelector, fetchApiDependencies } from "../../../../redux/states/generals/dependency.slice";
import { DistrictSelector, fetchApiDistricts } from "../../../../redux/states/generals/district.slice";

const FormDataGeneral: React.FC<any> = ({ }) => {

    // INPUT
    const [disabledMunicipalities, setDisabledMunicipalities] = useState<boolean>(true);

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const { departaments } = useAppSelector(DepartamentSelector);

    const { filters } = useAppSelector(MunicipalitySelector);

    const { dependencies } = useAppSelector(DependencySelector);

    const { districts } = useAppSelector(DistrictSelector);

    useEffect(() => {
        // Disparar la acción para obtener los datos
        dispatch(fetchApiDepartament());
        dispatch(fetchApiMunicipality());
        dispatch(fetchApiDependencies());
        dispatch(fetchApiDistricts());
    }, []);



    const dispatch = useAppDispatch();


    const setValueByIndex = (index: any, value: any) => {
        let updatedRequest: RequestDto = {};

        updatedRequest = {
            ...data,
            [index]: value
        }

        dispatch(setDataGeneral(updatedRequest));
    }

    const changeDepartament = (departament: any) => {
        if (departament != null) {

            setValueByIndex("PROY_DEPARTAMENTO", departament);

            dispatch(findByDepartamentId(departament));

            setDisabledMunicipalities(false);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-4 ">
                    <InputFloating name="sub-regional-apoyo" label="Sub. regional apoyo*" className="mb-3 InputSelected" type="text" setValueChange={(value: any) => setValueByIndex("PROY_SUB_REGIONAL_APOYO", value)} value={data.PROY_SUB_REGIONAL_APOYO} isInvalid={!data.PROY_SUB_REGIONAL_APOYO && errorInputs} />
                </div>
                <div className="col-lg-4 ">
                    <InputSelected label="Departamento*" options={departaments ? departaments : []} onChange={(value: any) => changeDepartament(value)} value={data.PROY_DEPARTAMENTO} isInvalid={!data.PROY_DEPARTAMENTO && errorInputs} />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Municipios*" className="mb-3 inputFloating" options={filters ? filters : []} onChange={(value: any) => setValueByIndex("PROY_MUNICIPIO_ORIGEN", value)} value={data.PROY_MUNICIPIO_ORIGEN} disabled={disabledMunicipalities} isInvalid={!data.PROY_MUNICIPIO_ORIGEN && errorInputs} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 ">
                    <InputFloating name="seccional" label="Seccional*" className="mb-3 inputFloating" type="text" setValueChange={(value: any) => setValueByIndex("PROY_SECCIONAL", value)} value={data.PROY_SECCIONAL} isInvalid={!data.PROY_SECCIONAL && errorInputs} />
                </div>
                <div className="col-lg-4 ">
                    <InputSelected label="Entidad dependencia responsable*" options={dependencies ? dependencies : []} onChange={(value: any) => setValueByIndex("PROY_ENTIDAD_DEPENDENCIA_RESPONSABLE", value)} value={data.PROY_ENTIDAD_DEPENDENCIA_RESPONSABLE} isInvalid={!data.PROY_ENTIDAD_DEPENDENCIA_RESPONSABLE && errorInputs} />
                </div>
                <div className="col-lg-4 ">
                    <InputSelected label="Distrito judicial*" className="mb-3 inputFloating" options={districts ? districts : []} onChange={(value: any) => setValueByIndex("PROY_DISTRITO_JUDICIAL", value)} value={data.PROY_DISTRITO_JUDICIAL} isInvalid={!data.PROY_DISTRITO_JUDICIAL && errorInputs} />
                </div>
            </div>
        </>
    )
}

export default FormDataGeneral;