import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { BaseDto } from "../../../models/general/BaseDto";
import typeActivityService from "../../../services/generals/type-activity.service";

export interface TypeActivityState {
    typeActivities: BaseDto[];
    status: string;
    error: any;
}

export const initialState: TypeActivityState = {
    typeActivities: [],
    status: "idle",
    error: ""
}

export const fetchApiTypeActivity = createAsyncThunk('data/type-activities', async () => {
    const response = await typeActivityService.getAll(); // Llamar al servicio
    return response;
});

const TypeActivitySlice = createSlice({
    name: "type-activity",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchApiTypeActivity.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiTypeActivity.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.typeActivities = action.payload ? action.payload : [];
        }).addCase(fetchApiTypeActivity.rejected, (state, action) => {
            state.status = 'failed';
            state.typeActivities = [];
            state.error = action.error.message;
        })
    }
})


export const TypeActivitySelector = (state: RootState) => state.typeActivity;

export default TypeActivitySlice.reducer;