import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import actionStrategyService from "../../../services/generals/action-strategy.service";
import { ActionStrategyObjetiveDto } from "../../../models/general/ActionStrategyObjetiveDto";

export interface ActionStrategyState {
    actionsStategies: ActionStrategyObjetiveDto[];
    status: string;
    error: any;
}

export const initialState: ActionStrategyState = {
    actionsStategies: [],
    status: "idle",
    error: ""
}

export const fetchApiActionStrategies = createAsyncThunk('data/actions-strategies', async () => {
    const response = await actionStrategyService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const ActionStrategiesSlice = createSlice({
    name: "actionStrategy",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiActionStrategies.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiActionStrategies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.actionsStategies = action.payload;
        }).addCase(fetchApiActionStrategies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

// export const { listAll, setLineObjetiveStrategyDirectionDtoError } = ActionStrategiesSlice.actions

export const ActionStrategiesSelector = (state: RootState) => state.actionStrategy;

export default ActionStrategiesSlice.reducer;