import React from "react";
import InputFloating from "../../../atoms/input/Input";
import InputSelected from "../../../atoms/selected/InputSelected";
import "./FormDataGeneraCoop.scss"
import { RequestInvertionDto } from "../../../../models/invertion/RequestInvertionDto";

interface FormDataGeneralCoopInterface {
    formData?: RequestInvertionDto
}

const FormDataGeneralCoop: React.FC<FormDataGeneralCoopInterface> = ({ formData }) => {
    return (
        <div className="containerInfo">
            <div className="col-lg-4 ">
                <InputFloating label="Sub. regional apoyo*" type="text" placeholder="" className="mb-3 InputSelected" setValueChange={(value: string) => { }} value=""></InputFloating>
                <InputFloating label="Seccional*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value=""></InputFloating>
            </div>
            <div className="col-lg-4 ">
                <InputSelected label="Departamento*" className="mb-3 inputFloating" options={[]} value=""></InputSelected>
                <InputSelected label="Municipio de origen*" className="mb-3 inputFloating" options={[]} value=""></InputSelected>
            </div>
            <div className="col-lg-4 ">
                <InputSelected label="Entidad dependencia responsable*" className="mb-3 inputFloating" options={[]} value=""></InputSelected>
                <InputSelected label="Dsitrito judicial*" className="mb-3 inputFloating" options={[]} value=""></InputSelected>
            </div>
        </div>
    )
}

export default FormDataGeneralCoop;