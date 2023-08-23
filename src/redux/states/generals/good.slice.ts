import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import goodService from "../../../services/generals/goods.service";
import { BaseDto } from "../../../models/general/BaseDto";

export interface GoodState {
    goods: BaseDto[];
    error: any;
    status: string;
}

export const initialState: GoodState = {
    goods: [],
    error: "",
    status: ""
}

export const fetchApiGood = createAsyncThunk('data/goods', async () => {
    const response = await goodService.getAll(); // Llamar al servicio
    return response;
});

const GoodSlice = createSlice({
    name: "good",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchApiGood.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiGood.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.goods = action.payload;
        }).addCase(fetchApiGood.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export const GoodSelector = (state: RootState) => state.good;

export default GoodSlice.reducer;