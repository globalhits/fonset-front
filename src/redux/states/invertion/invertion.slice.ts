import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { RequestInvertionDto } from "../../../models/invertion/RequestInvertionDto";
import { TypeCoverageDto } from "../../../models/invertion/TypeCoverageDto";


const covergateState: TypeCoverageDto = {
    tipo: "",
    cobertura: []
}

export const initialState: RequestInvertionDto = {
    PROY_CODIGO: "",
    PROY_NOMBRE: "",
    PROY_TIPO: [],
    PROY_DEPENDENCIA_RESPONSABLE: "",
    PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE: "",
    PROY_ENTIDAD_NACIONAL_INVOLUCRADA: [],
    PROY_DEPENDENCIAS_INVOLUCRADAS: [],
    PROY_COBERTURA: covergateState,

    //PROYECTO
    PROY_JUSTIFICACION_ANTECEDENTES: "",
    PROY_POBLACION_AFECTADA: "",
    PROY_POBLACION_OBJETO: "",
    PROY_CARACTERISTICAS_DEMOGRAFICAS: "",
    PROY_ANALISIS_PARTICIPANTES: [],

    //OBJETIVO GENERAL
    PROY_OBJETIVO_GENERAL: "",
    PROY_DESCRIPCION_GENERAL: "",
    PROY_INDICADOR_GENERAL: "",
    PROY_LINEA_BASE_GENERAL: "",
    PROY_META_GENERAL: "",
    PROY_MES_INICIO_GENERAL: new Date(),
    PROY_MES_FINAL_GENERAL: new Date(),
    PROY_ENTREGABLE_GENERAL: "",
    PROY_DESCRIPCION_ENTREGABLE_GENERAL: "",

    // OBJETIVO
    PROY_OBJETIVO_ESPECIFICO: [],
    PROY_ACTIVIDADES: [],
}

const InvertionSlice = createSlice({
    name: "invertion",
    initialState,
    reducers: {
        setDataInvertion: (state, { payload }: PayloadAction<any>) => {
            state = payload;
        }
    }
});

export const { setDataInvertion } = InvertionSlice.actions

export const InvertionSelector = (state: RootState) => state.invertion;

export default InvertionSlice.reducer;
