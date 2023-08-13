import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import helper from "../../../utils/helper";
import { RequestFonsetDto } from "../../../models/fonset/RequestFonsetDto";


export const initialStateFormFonset: RequestFonsetDto = {
    PROY_CODIGO: "",
    PROY_FECHA: helper.getDateNow(),
    PROY_NOMBRE: "",
    PRFO_SUB_REGIONAL_APOYO: "",
    PRFO_SECCIONAL: "",
    PRFO_DEPARTAMENTO: "",
    PRFO_MUNICIPIO_ORIGEN: "",
    PRFO_ENTIDAD_DEPENDENCIA_RESPONSABLE: "",
    PRFO_DISTRITO_JUDICIAL: "",
    PRFO_OBJETIVO_GENERAL: "",
    PRFO_OBJETIVOS_ESPECIFICOS: "",
    PRFO_POBLACION_OBJETIVO: "",
    PRFO_DESCRIPCION_BIENES_SERVICIOS: "",
    PRFO_JUSTIFICACION: "",
    PRFO_DESCRIPCION_PROBLEMA: "",
    PRFO_OBSERVACIONES: "",
    PRFO_DOCUMENTOS_ANEXOS: [],
    PRFO_BIENES_SERVICIOS: [],
    PRFO_ESTADO: "",
    PRFO_CREACION_PROYECTO: "",
}

export interface FonsetState {
    data: RequestFonsetDto;
    status: string;
    error: any;
}

export const initialState: FonsetState = {
    data: initialStateFormFonset,
    error: "",
    status: ""
}

const InvertionSlice = createSlice({
    name: "fonset",
    initialState,
    reducers: {
        setDataInvertion: (state, { payload }: PayloadAction<any>) => {
            state = payload;
        }
    }
});

export const { setDataInvertion } = InvertionSlice.actions

export const InvertionSelector = (state: RootState) => state.fonset;

export default InvertionSlice.reducer;
