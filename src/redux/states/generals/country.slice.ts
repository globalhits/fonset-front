import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import countryService from "../../../services/generals/country.service";
import { BaseDto } from "../../../models/general/BaseDto";

export interface CountryState {
    countries: BaseDto[];
    status: string;
    error: any;
}

export const initialState: CountryState = {
    countries: [],
    status: "",
    error: ""
}

export const fetchApiCountry = createAsyncThunk('data/countries', async () => {
    const response = await countryService.getAll(); // Llamar al servicio
    return response;
});

const CountrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiCountry.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiCountry.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.countries = action.payload;
        }).addCase(fetchApiCountry.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

// export const { listAll, setCountryError } = CountrySlice.actions

export const CountrySelector = (state: RootState) => state.country

export default CountrySlice.reducer;