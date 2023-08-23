import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { DependencyDto } from "../../../models/general/DependencyDto";
import districtService from "../../../services/generals/district.service";

export interface DistricState {
    districts: DependencyDto[];
    status: string;
    error: any;
}

export const initialState: DistricState = {
    districts: [],
    status: "idle",
    error: ""
}

export const fetchApiDistricts = createAsyncThunk('data/districts', async () => {
    const response = await districtService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const Districlice = createSlice({
    name: "district",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiDistricts.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiDistricts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.districts = action.payload;
        }).addCase(fetchApiDistricts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

// export const { listAll, setDependencyError } = Districlice.actions

export const DistrictSelector = (state: RootState) => state.district;

export default Districlice.reducer;