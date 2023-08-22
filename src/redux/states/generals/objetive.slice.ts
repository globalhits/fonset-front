import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ObjetiveStrategyDirectionDto } from "../../../models/general/ObjetiveStrategyDirectionDto";
import objetiveDirectionService from "../../../services/generals/objetive-direction.service";
import { ActionStrategyObjetiveDto } from "../../../models/general/ActionStrategyObjetiveDto";
import actionStrategyService from "../../../services/generals/action-strategy.service";

export interface ObjetivesState {
    strategies: ObjetiveStrategyDirectionDto[];
    actions: ActionStrategyObjetiveDto[];
    status: string;
    error: any;
}

export const initialState: ObjetivesState = {
    strategies: [],
    actions: [],
    status: "idle",
    error: ""
}

export const fetchApiObjetives = createAsyncThunk('data/objetives-directions', async () => {
    const response = await objetiveDirectionService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

export const fetchApiActionStrategies = createAsyncThunk('data/actions-strategies', async () => {
    const response = await actionStrategyService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const ObjetiveSlice = createSlice({
    name: "objetive",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiObjetives.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiObjetives.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.strategies = action.payload;
        }).addCase(fetchApiObjetives.rejected, (state, action) => {
            state.status = 'failed';
        }).addCase(fetchApiActionStrategies.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchApiActionStrategies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.actions = action.payload;
        }).addCase(fetchApiActionStrategies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export const ObjetiveSelector = (state: RootState) => state.objetive;

export default ObjetiveSlice.reducer;