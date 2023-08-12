import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import helper from "../../../utils/helper";
import { RequestCooperativeDto } from "../../../models/cooperative/RequestCooperativeDto";
import { TypeCoverageDto } from "../../../models/general/TypeCoverageDto";

const covergateState: TypeCoverageDto = {
    tipo: "",
    cobertura: []
}

export const initialStateFormCooperative: RequestCooperativeDto = {

    //base
    PROY_CODIGO: "",
    PROY_FECHA: helper.getDateNow(),
    PROY_NOMBRE: "",
    PROY_TIPO: [],
    PROY_COBERTURA: covergateState,
    PROY_ENTIDAD_NACIONAL_INVOLUCRADA: [],
    PROY_DEPENDENCIAS_INVOLUCRADAS: [],
    PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE: "",
    PROY_OBJETIVO_ESPECIFICO: [],
    PROY_ACTIVIDADES: [],


    PRCI_PAIS_COOPERANTE: "",
    PRCI_IMPLEMENTADOR: "",
    PRCI_JUSTIFICACION: "",
    PRCI_FECHA_ESPERADA_INICIO: helper.getDateNow(),
    PRCI_FECHA_ESPERADA_TERMINADA: helper.getDateNow(),
    PRCI_DURACION_ESTIMADA_MESES: 0,
    PRCI_OBJETIVO_GENERAL: "",
}

export interface CooperativeState {
    data: RequestCooperativeDto;
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
