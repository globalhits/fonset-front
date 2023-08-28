import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { LineProgramDto, ProgramDto } from "../../../models/general/LineProgramDto";
import programService from "../../../services/generals/program.service";
import lineProgramService from "../../../services/generals/line-program.service";

export interface ProgramState {
    programs: ProgramDto[];
    line_programs: LineProgramDto[];
    line_programs_filters: LineProgramDto[];
    status: string;
    error: any;
}

export const initialState: ProgramState = {
    programs: [],
    line_programs: [],
    line_programs_filters: [],
    status: "idle",
    error: ""
}

export const fetchApiPrograms = createAsyncThunk('data/programs', async () => {
    const response = await programService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

export const fetchApiLinePrograms = createAsyncThunk('data/lines-programs', async () => {
    const response = await lineProgramService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const ProgramSlice = createSlice({
    name: "program",
    initialState,
    reducers: {
        filterByProgramId: (state, { payload }: PayloadAction<number>) => {
            state.line_programs_filters = state.line_programs.filter(item => item.parentId == payload);
        },
        listAllLinePrograms: (state) => {
            state.line_programs_filters = state.line_programs;
        },
        setLineProgramsError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchApiPrograms.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiPrograms.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.programs = action.payload ? action.payload : [];
        }).addCase(fetchApiPrograms.rejected, (state, action) => {
            state.status = 'failed';
            state.programs = [];
            state.error = action.error.message;
        }).addCase(fetchApiLinePrograms.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiLinePrograms.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.line_programs = action.payload ? action.payload : [];
            state.line_programs_filters = action.payload ? action.payload : [];
        }).addCase(fetchApiLinePrograms.rejected, (state, action) => {
            state.status = 'failed';
            state.line_programs = [];
            state.line_programs_filters = [];
            state.error = action.error.message;
        });
    }
})

export const { filterByProgramId, listAllLinePrograms, setLineProgramsError } = ProgramSlice.actions

export const ProgramSelector = (state: RootState) => state.program;

export default ProgramSlice.reducer;