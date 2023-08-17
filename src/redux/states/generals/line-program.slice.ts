import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { LineProgramDto, Program } from "../../../models/general/LineProgram";
import programService from "../../../services/generals/program.service";

export interface ProgramState {
    programs: Program[];
    status: string;
    error: any;
}

export const initialState: ProgramState = {
    programs: [],
    status: "idle",
    error: ""
}

export const fetchApiPrograms = createAsyncThunk('data/programs', async () => {
    const response = await programService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const ProgramSlice = createSlice({
    name: "lineProgram",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiPrograms.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiPrograms.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.programs = action.payload;
        }).addCase(fetchApiPrograms.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

// export const { listAll, setLineProgramError } = ProgramSlice.actions

export const LineProgramSelector = (state: RootState) => state.lineProgram;

export default ProgramSlice.reducer;