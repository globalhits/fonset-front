import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TypeCoverageDto } from "../../../models/general/TypeCoverageDto";
import helper from "../../../utils/helper";
import { RequestDto } from "../../../models/general/RequestDto";


const covergateState: TypeCoverageDto = {
    TIPO: "",
    COBERTURA: []
}

export const initialStateFormGeneral: RequestDto = {
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
    PROY_OBJETIVOS_ESPECIFICOS: [],
    PROY_ACTIVIDADES: [],

    //COOPERATIVE
    PROY_PAIS_COOPERANTE: "",
    PROY_IMPLEMENTADOR: "",
    PROY_JUSTIFICACION: "",
    PROY_FECHA_ESPERADA_INICIO: helper.getDateNow(),
    PROY_FECHA_ESPERADA_TERMINADA: helper.getDateNow(),
    PROY_DURACION_ESTIMADA_MESES: 0,

    //FONSET
    PROY_SUB_REGIONAL_APOYO: "",
    PROY_SECCIONAL: "",
    PROY_DEPARTAMENTO: "",
    PROY_MUNICIPIO_ORIGEN: "",
    PROY_ENTIDAD_DEPENDENCIA_RESPONSABLE: "",
    PROY_DISTRITO_JUDICIAL: "",
    PROY_POBLACION_OBJETIVO: "",
    PROY_DESCRIPCION_BIENES_SERVICIOS: "",
    PROY_DESCRIPCION_PROBLEMA: "",
    PROY_OBSERVACIONES: "",
    PROY_DOCUMENTOS_ANEXOS: [],
    PROY_BIENES_SERVICIOS: [],
    PROY_ESTADO: "",
    PROY_CREACION_PROYECTO: "",
}

export interface GeneralState {
    data: RequestDto;
    status: string;
    error: any;
}

export const initialState: GeneralState = {
    data: initialStateFormGeneral,
    error: "",
    status: ""
}

const GeneralSlice = createSlice({
    name: "invertion",
    initialState,
    reducers: {
        setDataGeneral: (state, { payload }: PayloadAction<any>) => {
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
                state.data.PROY_COBERTURA.TIPO = payload
            }
        },
        addTypeCoverages: (state, { payload }: PayloadAction<any>) => {
            state.data.PROY_COBERTURA = payload;
        },
        addPeoples: (state, { payload }: PayloadAction<any>) => {
            state.data.PROY_ANALISIS_PARTICIPANTES = payload;
        },
    }
});

export const { setDataGeneral, setEntityRelation, setDependencyInvolved, setTypeCoverage, addTypeCoverages, addPeoples } = GeneralSlice.actions

export const GeneralSelector = (state: RootState) => state.general;

export default GeneralSlice.reducer;
