import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface DepartamentState {
    departaments: [];
    error: string
}

export const initialState: DepartamentState = {
    departaments: [],
    error: ""
}

const DepartamentSlice = createSlice({
    name: "departament",
    initialState,
    reducers: {
        listAll: (state, { payload }: PayloadAction<any>) => {
            state.departaments = payload;
        },
        setDepartamentError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    }
})

export const { listAll, setDepartamentError } = DepartamentSlice.actions

export const DepartamentSelector = (state: RootState) => state.departament

export default DepartamentSlice.reducer;