import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import departamentService from "../../../services/generals/departament.service";
import { BaseDto } from "../../../models/general/BaseDto";

export interface DepartamentState {
    departaments: BaseDto[];
    status: string;
    error: any;
}

export const initialState: DepartamentState = {
    departaments: [],
    status: "",
    error: ""
}

export const fetchApiDepartament = createAsyncThunk('data/departaments', async () => {
    const response = await departamentService.getAll(); // Llamar al servicio
    return response;
});

const DepartamentSlice = createSlice({
    name: "departament",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiDepartament.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiDepartament.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.departaments = action.payload ? action.payload : [];
        }).addCase(fetchApiDepartament.rejected, (state, action) => {
            state.status = 'failed';
            state.departaments = [];
            state.error = action.error.message;
        });
    }
})

// export const { listAll, setDepartamentError } = DepartamentSlice.actions

export const DepartamentSelector = (state: RootState) => state.departament

export default DepartamentSlice.reducer;