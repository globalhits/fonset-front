import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import helper from "../../../utils/helper";
import { TypeCoverageDto } from "../../../models/general/TypeCoverageDto";
import { RequestDto } from "../../../models/general/RequestDto";

const covergateState: TypeCoverageDto = {
    tipo: "",
    cobertura: []
}

export const initialStateFormCooperative: RequestDto = {

    //base
    PROY_CODIGO: "",
    PROY_FECHA: helper.getDateNow(),
    PROY_NOMBRE: "",
    PROY_TIPO: [],
    PROY_COBERTURA: covergateState,
    PROY_ENTIDAD_NACIONAL_INVOLUCRADA: [],
    PROY_DEPENDENCIAS_INVOLUCRADAS: [],
    PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE: "",
    PROY_OBJETIVOS_ESPECIFICOS: [],
    PROY_ACTIVIDADES: [],

    PROY_PAIS_COOPERANTE: "",
    PROY_IMPLEMENTADOR: "",
    PROY_JUSTIFICACION: "",
    PROY_FECHA_ESPERADA_INICIO: helper.getDateNow(),
    PROY_FECHA_ESPERADA_TERMINADA: helper.getDateNow(),
    PROY_DURACION_ESTIMADA_MESES: 0,
    PROY_OBJETIVO_GENERAL: "",
}

export interface CooperativeState {
    data: RequestDto;
    status: string;
    error: any;
}

export const initialState: CooperativeState = {
    data: initialStateFormCooperative,
    error: "",
    status: ""
}

const InvertionSlice = createSlice({
    name: "cooperative",
    initialState,
    reducers: {
        setDataInvertion: (state, { payload }: PayloadAction<any>) => {
            state = payload;
        }
    }
});

export const { setDataInvertion } = InvertionSlice.actions

export const InvertionSelector = (state: RootState) => state.cooperative;

export default InvertionSlice.reducer;
