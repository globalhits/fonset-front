import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { RequestInvertionDto } from "../../../models/invertion/RequestInvertionDto";
import { TypeCoverageDto } from "../../../models/general/TypeCoverageDto";
import helper from "../../../utils/helper";


const covergateState: TypeCoverageDto = {
    tipo: "",
    cobertura: []
}

export const initialStateFormInvertion: RequestInvertionDto = {
    PROY_CODIGO: "",
    PROY_NOMBRE: "",
    PROY_FECHA: helper.getDateNow(),
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
    PROY_MES_INICIO_GENERAL: helper.getDateNow(),
    PROY_MES_FINAL_GENERAL: helper.getDateNow(),
    PROY_ENTREGABLE_GENERAL: "",
    PROY_DESCRIPCION_ENTREGABLE_GENERAL: "",

    // OBJETIVO
    PROY_OBJETIVO_ESPECIFICO: [],
    PROY_ACTIVIDADES: [],
}

export interface InvertionState {
    data: RequestInvertionDto;
    status: string;
    error: any;
}

export const initialState: InvertionState = {
    data: initialStateFormInvertion,
    error: "",
    status: ""
}

const InvertionSlice = createSlice({
    name: "invertion",
    initialState,
    reducers: {
        setDataInvertion: (state, { payload }: PayloadAction<any>) => {
            state.data = payload;
        },
        setEntityRelation: (state, { payload }: PayloadAction<any>) => {
            state.data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA = payload;
        },
        setDependencyInvolved: (state, { payload }: PayloadAction<any>) => {
            state.data.PROY_DEPENDENCIAS_INVOLUCRADAS = payload;
        },
        setTypeCoverage: (state, { payload }: PayloadAction<string>) => {
            if (state.data.PROY_COBERTURA) {
                state.data.PROY_COBERTURA.tipo = payload
            }
        },
        addTypeCoverages: (state, { payload }: PayloadAction<any>) => {
            state.data.PROY_COBERTURA = payload;
        }
    }
});

export const { setDataInvertion, setEntityRelation, setDependencyInvolved, setTypeCoverage, addTypeCoverages } = InvertionSlice.actions

export const InvertionSelector = (state: RootState) => state.invertion;

export default InvertionSlice.reducer;
