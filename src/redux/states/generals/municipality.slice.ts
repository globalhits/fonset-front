import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface MunicipalityState {
    municipalities: [];
    error: string
}

export const initialState: MunicipalityState = {
    municipalities: [],
    error: ""
}

const MunicipalitySlice = createSlice({
    name: "municipality",
    initialState,
    reducers: {
        listAll: (state, { payload }: PayloadAction<any>) => {
            state.municipalities = payload;
        },
        setMunicipalityError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    }
})

export const { listAll, setMunicipalityError } = MunicipalitySlice.actions

export const MunicipalitySelector = (state: RootState) => state.municipality;

export default MunicipalitySlice.reducer;