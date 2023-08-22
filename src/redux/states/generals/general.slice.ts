import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TypeCoverageDto } from "../../../models/general/TypeCoverageDto";
import helper from "../../../utils/helper";
import { RequestDto } from "../../../models/general/RequestDto";
import invertionService from "../../../services/invertion/invertion.service";
import cooperativeService from "../../../services/cooperative/cooperative.service";
import fonsetService from "../../../services/fonset/fonset.service";


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

    //INPUTS FILES OBJETIVE SPECIFIES TO ADD TABLE
    PROY_OBJETIVO_GENERAL_SPECIFY: "",
    PROY_DESCRIPCION_GENERAL_SPECIFY: "",
    PROY_INDICADOR_GENERAL_SPECIFY: "",
    PROY_LINEA_BASE_GENERAL_SPECIFY: "",
    PROY_META_GENERAL_SPECIFY: "",
    PROY_ENTREGABLE_GENERAL_SPECIFY: "",
    PROY_MES_INICIO_GENERAL_SPECIFY: helper.getDateNow(),
    PROY_MES_FINAL_GENERAL_SPECIFY: helper.getDateNow(),
    PROY_DESCRIPCION_ENTREGABLE_GENERAL_SPECIFY: "",

    PROY_EJE_TEMATICO_SPECIFY: "",
    PROY_CATEGORY_SPECIFY: "",
    PROY_BIEN_SPECIFY: "",
    PROY_OBJETIVO_ESTRATEGICO_SPECIFY: "",
    PROY_SUB_TEMA_OBJETIVO_ESTRATEGICO_SPECIGY: "",
    PROY_ACCIONES_OBJETIVO_ESTRATEGICO: "",
    PROY_PROGRAMA_SPECIFY: "",
    PROY_LINEA_PROGRAMA: ""

}

export interface GeneralState {
    data: RequestDto;
    response: any;
    status: string;
    error: any;
    errorInputs: boolean;
}

export const initialState: GeneralState = {
    data: initialStateFormGeneral,
    response: null,
    error: "",
    status: "",
    errorInputs: false
}

//API
export const saveFormInvertionApi = createAsyncThunk('data/invertion', async (request: RequestDto) => {
    const response = await invertionService.save(request); // Llamar al servicio
    console.log("response", response);
    return response;
});

export const saveFormFonsetApi = createAsyncThunk('data/fonset', async (request: RequestDto) => {
    const response = await fonsetService.save(request); // Llamar al servicio
    console.log("response", response);
    return response;
});

export const saveFormCooperativeApi = createAsyncThunk('data/cooperative', async (request: RequestDto) => {
    const response = await cooperativeService.save(request); // Llamar al servicio
    console.log("response", response);
    return response;
});

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
            if (state.data.PROY_COBERTURA?.COBERTURA) {
                state.data.PROY_COBERTURA.COBERTURA = payload;
            }
        },
        addPeoples: (state, { payload }: PayloadAction<any>) => {
            state.data.PROY_ANALISIS_PARTICIPANTES = payload;
        },
        addGoods: (state, { payload }: PayloadAction<any>) => {
            state.data.PROY_BIENES_SERVICIOS = payload;
        },
        showAlertForInputs: (state, { payload }: PayloadAction<boolean>) => {
            // show alert when to on click button "finish" 
            state.errorInputs = payload;
        },
        addObjetiveSpecifies: (state, { payload }: PayloadAction<any>) => {
            if (state.data.PROY_OBJETIVOS_ESPECIFICOS) {
                state.data.PROY_OBJETIVOS_ESPECIFICOS = payload;
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(saveFormInvertionApi.pending, state => {
            state.status = 'loading';
        }).addCase(saveFormInvertionApi.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.response = action.payload;
        }).addCase(saveFormInvertionApi.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(saveFormFonsetApi.pending, state => {
            state.status = 'loading';
        }).addCase(saveFormFonsetApi.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.response = action.payload;
        }).addCase(saveFormFonsetApi.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(saveFormCooperativeApi.pending, state => {
            state.status = 'loading';
        }).addCase(saveFormCooperativeApi.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.response = action.payload;
        }).addCase(saveFormCooperativeApi.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },
});

export const { setDataGeneral, setEntityRelation, setDependencyInvolved, setTypeCoverage, addTypeCoverages, addPeoples, addGoods, addObjetiveSpecifies, showAlertForInputs } = GeneralSlice.actions

export const GeneralSelector = (state: RootState) => state.general;

export default GeneralSlice.reducer;
