import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ObjetiveStrategyDirectionDto, SubObjetive } from "../../../models/general/ObjetiveStrategyDirectionDto";
import objetiveDirectionService from "../../../services/generals/objetive-direction.service";
import { ActionStrategyObjetiveDto } from "../../../models/general/ActionStrategyObjetiveDto";
import actionStrategyService from "../../../services/generals/action-strategy.service";
import subobjetiveStrategyService from "../../../services/generals/subobjetive-strategy.service";

export interface ObjetivesState {
    strategies: ObjetiveStrategyDirectionDto[];
    sub_strategies: SubObjetive[];
    sub_strategies_filters: SubObjetive[];
    actions: ActionStrategyObjetiveDto[];
    status: string;
    error: any;
}

export const initialState: ObjetivesState = {
    strategies: [],
    sub_strategies: [],
    sub_strategies_filters: [],
    actions: [],
    status: "idle",
    error: ""
}

export const fetchApiObjetives = createAsyncThunk('data/objetives-directions', async () => {
    const response = await objetiveDirectionService.getAll(); // Llamar al servicio
    return response;
});

export const fetchApiSubObjetives = createAsyncThunk('data/sub-objetives', async () => {
    const response = await subobjetiveStrategyService.getAll(); // Llamar al servicio
    return response;
});

export const fetchApiActionStrategies = createAsyncThunk('data/actions-strategies', async () => {
    const response = await actionStrategyService.getAll(); // Llamar al servicio
    return response;
});

const ObjetiveSlice = createSlice({
    name: "objetive",
    initialState,
    reducers: {
        filterBySubObjetiveByParentId: (state, { payload }: PayloadAction<number>) => {
            state.sub_strategies_filters = state.sub_strategies.filter(item => item.parentId == payload);
        },
        listAllSubObjetives: (state) => {
            state.sub_strategies_filters = state.sub_strategies;
        },
        setSubObjetivesError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchApiObjetives.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiObjetives.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.strategies = action.payload ? action.payload : [];
        }).addCase(fetchApiObjetives.rejected, (state, action) => {
            state.strategies = [];
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(fetchApiSubObjetives.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiSubObjetives.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.sub_strategies_filters = action.payload ? action.payload : [];
            state.sub_strategies = action.payload ? action.payload : [];
        }).addCase(fetchApiSubObjetives.rejected, (state, action) => {
            state.sub_strategies = [];
            state.sub_strategies_filters = [];
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(fetchApiActionStrategies.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchApiActionStrategies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.actions = action.payload ? action.payload : [];
        }).addCase(fetchApiActionStrategies.rejected, (state, action) => {
            state.actions = [];
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export const { filterBySubObjetiveByParentId, listAllSubObjetives, setSubObjetivesError } = ObjetiveSlice.actions;

export const ObjetiveSelector = (state: RootState) => state.objetive;

export default ObjetiveSlice.reducer;