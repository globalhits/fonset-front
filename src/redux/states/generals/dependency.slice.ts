import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import dependencyService from "../../../services/generals/dependency.service";
import { DependencyDto } from "../../../models/general/DependencyDto";

export interface DependencyState {
    dependencies: DependencyDto[];
    status: string;
    error: any;
}

export const initialState: DependencyState = {
    dependencies: [],
    status: "idle",
    error: ""
}

export const fetchApiDependencies = createAsyncThunk('data/dependencies', async () => {
    const response = await dependencyService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const DependencySlice = createSlice({
    name: "dependency",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchApiDependencies.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiDependencies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.dependencies = action.payload ? action.payload : [];
        }).addCase(fetchApiDependencies.rejected, (state, action) => {
            state.status = 'failed';
            state.dependencies = [];
            state.error = action.error.message;
        });
    }
})

// export const { listAll, setDependencyError } = DependencySlice.actions

export const DependencySelector = (state: RootState) => state.dependency;

export default DependencySlice.reducer;