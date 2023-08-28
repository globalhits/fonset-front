import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { BaseDto } from "../../../models/general/BaseDto";
import unitService from "../../../services/generals/unit.service";
import subUnitService from "../../../services/generals/sub-unit.service";

export interface UnitState {
    unities: BaseDto[];
    sub_unities: BaseDto[];
    sub_unities_filters: BaseDto[];
    status: string;
    error: any;
}

export const initialState: UnitState = {
    unities: [],
    sub_unities: [],
    sub_unities_filters: [],
    status: "idle",
    error: ""
}

export const fetchApiUnits = createAsyncThunk('data/units', async () => {
    const response = await unitService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

export const fetchApiSubUnits = createAsyncThunk('data/sub-units', async () => {
    const response = await subUnitService.getAll(); // Llamar al servicio
    console.log("response-sub-units", response);
    return response;
});

const UnitSlice = createSlice({
    name: "unit",
    initialState,
    reducers: {
        filterByUnitId: (state, { payload }: PayloadAction<any>) => {
            state.sub_unities_filters = state.sub_unities.filter(item => item.parentId == Number(payload));
        },
        listAllSubUnits: (state) => {
            state.sub_unities_filters = state.sub_unities;
        },
        setSubUnitsError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchApiUnits.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiUnits.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.unities = action.payload ? action.payload : [];
        }).addCase(fetchApiUnits.rejected, (state, action) => {
            state.status = 'failed';
            state.unities = [];
            state.error = action.error.message;
        }).addCase(fetchApiSubUnits.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiSubUnits.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.sub_unities = action.payload ? action.payload : [];
            state.sub_unities_filters = action.payload ? action.payload : [];
        }).addCase(fetchApiSubUnits.rejected, (state, action) => {
            state.status = 'failed';
            state.sub_unities = [];
            state.sub_unities_filters = [];
            state.error = action.error.message;
        });
    }
})

export const { filterByUnitId, listAllSubUnits, setSubUnitsError } = UnitSlice.actions

export const UnitSelector = (state: RootState) => state.unit;

export default UnitSlice.reducer;