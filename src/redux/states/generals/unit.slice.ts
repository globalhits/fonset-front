import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { LineProgramDto, ProgramDto } from "../../../models/general/LineProgramDto";
import programService from "../../../services/generals/program.service";
import lineProgramService from "../../../services/generals/line-program.service";

export interface UnitState {
    unities: ProgramDto[];
    sub_unities: LineProgramDto[];
    sub_unities_filters: LineProgramDto[];
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
    const response = await programService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

export const fetchApiSubUnits = createAsyncThunk('data/sub-units', async () => {
    const response = await lineProgramService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const UnitSlice = createSlice({
    name: "program",
    initialState,
    reducers: {
        filterByUnitId: (state, { payload }: PayloadAction<number>) => {
            state.sub_unities_filters = state.sub_unities.filter(item => item.parentId == payload);
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
            state.unities = action.payload;
        }).addCase(fetchApiUnits.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(fetchApiSubUnits.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiSubUnits.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.sub_unities = action.payload;
            state.sub_unities_filters = action.payload;
        }).addCase(fetchApiSubUnits.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export const { filterByUnitId, listAllSubUnits, setSubUnitsError } = UnitSlice.actions

export const UnitSelector = (state: RootState) => state.unit;

export default UnitSlice.reducer;