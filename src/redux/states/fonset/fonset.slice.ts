import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import helper from "../../../utils/helper";
import { RequestDto } from "../../../models/general/RequestDto";

export const initialStateFormFonset: RequestDto = {
    PROY_CODIGO: "",
    PROY_FECHA: helper.getDateNow(),
    PROY_NOMBRE: "",
    PROY_SUB_REGIONAL_APOYO: "",
    PROY_SECCIONAL: "",
    PROY_DEPARTAMENTO: "",
    PROY_MUNICIPIO_ORIGEN: "",
    PROY_ENTIDAD_DEPENDENCIA_RESPONSABLE: "",
    PROY_DISTRITO_JUDICIAL: "",
    PROY_OBJETIVO_GENERAL: "",
    PROY_OBJETIVOS_ESPECIFICOS: [],
    PROY_POBLACION_OBJETIVO: "",
    PROY_DESCRIPCION_BIENES_SERVICIOS: "",
    PROY_JUSTIFICACION: "",
    PROY_DESCRIPCION_PROBLEMA: "",
    PROY_OBSERVACIONES: "",
    PROY_DOCUMENTOS_ANEXOS: [],
    PROY_BIENES_SERVICIOS: [],
    PROY_ESTADO: "",
    PROY_CREACION_PROYECTO: "",
}

export interface FonsetState {
    data: RequestDto;
    status: string;
    error: any;
}

export const initialState: FonsetState = {
    data: initialStateFormFonset,
    error: "",
    status: ""
}

const FonsetSlice = createSlice({
    name: "fonset",
    initialState,
    reducers: {
        setDataFonset: (state, { payload }: PayloadAction<any>) => {
            state = payload;
        }
    }
});

export const { setDataFonset } = FonsetSlice.actions

export const FonsetSelector = (state: RootState) => state.fonset;

export default FonsetSlice.reducer;
