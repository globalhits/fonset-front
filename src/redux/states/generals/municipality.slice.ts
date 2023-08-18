import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import municipalityService from "../../../services/generals/municipality.service";
import { MunicipalityDto } from "../../../models/general/MunicipalityDto";

export interface MunicipalityState {
    municipalities: MunicipalityDto[];
    filters: MunicipalityDto[];
    error: any;
    status: string;
}

export const initialState: MunicipalityState = {
    municipalities: [],
    filters: [],
    error: "",
    status: ""
}

export const fetchApiMunicipality = createAsyncThunk('data/municipalities', async () => {
    const response = await municipalityService.getAll(); // Llamar al servicio
    return response;
});

const MunicipalitySlice = createSlice({
    name: "municipality",
    initialState,
    reducers: {
        listAllMunicipalities: (state) => {
            state.filters = state.municipalities;
        },
        findByDepartamentId: (state, { payload }: PayloadAction<any>) => {
            state.filters = state.municipalities.filter((item: MunicipalityDto) => item.parentId === parseInt(payload));
        },
        setMunicipalityError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchApiMunicipality.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiMunicipality.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.filters = action.payload;
            state.municipalities = action.payload;
        }).addCase(fetchApiMunicipality.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export const { findByDepartamentId, listAllMunicipalities } = MunicipalitySlice.actions

export const MunicipalitySelector = (state: RootState) => state.municipality;

export default MunicipalitySlice.reducer;