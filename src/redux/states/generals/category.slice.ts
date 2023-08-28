import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { CategoryDto } from "../../../models/general/CategoryDto";
import categorySpecificService from "../../../services/generals/category-specific.service";
import categoryGeneralService from "../../../services/generals/category-general.service";

export interface CategoryState {
    generals: CategoryDto[];
    specifies: CategoryDto[];
    specifies_filter: CategoryDto[];
    status: string;
    error: any;
}

export const initialState: CategoryState = {
    generals: [],
    specifies: [],
    specifies_filter: [],
    status: "idle",
    error: ""
}

export const fetchApiCategoriesSpecifies = createAsyncThunk('data/categories-specifies', async () => {
    const response = await categorySpecificService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

export const fetchApiCategoriesGenerals = createAsyncThunk('data/categories-generals', async () => {
    const response = await categoryGeneralService.getAll(); // Llamar al servicio
    console.log("response", response);
    return response;
});

const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        filterByCategoryGeneralId: (state, { payload }: PayloadAction<number>) => {
            state.specifies_filter = state.specifies.filter(item => item.parentId == payload);
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchApiCategoriesSpecifies.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiCategoriesSpecifies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.specifies = action.payload ? action.payload : [];
            state.specifies_filter = action.payload ? action.payload : [];
        }).addCase(fetchApiCategoriesSpecifies.rejected, (state, action) => {
            state.status = 'failed';
            state.specifies_filter = [];
            state.error = action.error.message;
        }).addCase(fetchApiCategoriesGenerals.pending, state => {
            state.status = 'loading';
        }).addCase(fetchApiCategoriesGenerals.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.generals = action.payload ? action.payload : [];
        }).addCase(fetchApiCategoriesGenerals.rejected, (state, action) => {
            state.status = 'failed';
            state.generals = [];
            state.error = action.error.message;
        })
    }
})

export const { filterByCategoryGeneralId } = CategorySlice.actions

export const CategorySelector = (state: RootState) => state.category;

export default CategorySlice.reducer;