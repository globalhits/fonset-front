import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ObjetiveStrategyDirectionDto } from "../../../models/general/ObjetiveStrategyDirectionDto";
import objetiveDirectionService from "../../../services/generals/objetive-direction.service";

export interface ObjetiveDirectionState {
    objetives: ObjetiveStrategyDirectionDto[];
    status: string;
    error: any;
}

export const initialState: ObjetiveDirectionState = {
    objetives: [],
    status: "idle",
    error: ""
}

export const fetchApiObjetiveDirections = createAsyncThunk('data/objetives-directions', async () => {
    const response = await objetiveDirectionService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const ObjetiveDirectionSlice = createSlice({
    name: "objetiveDirection",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiObjetiveDirections.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiObjetiveDirections.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.objetives = action.payload;
        }).addCase(fetchApiObjetiveDirections.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

// export const { listAll, setLineObjetiveStrategyDirectionDtoError } = ObjetiveDirectionSlice.actions

export const ObjetiveDirectionSelector = (state: RootState) => state.objetiveDirection;

export default ObjetiveDirectionSlice.reducer;