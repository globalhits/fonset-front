import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import LoadingReducer from './states/generals/loading.slice';
import DepartamentReducer from './states/generals/departament.slice';
import MunicipalityReducer from './states/generals/municipality.slice';
import InvertionReducer from './states/invertion/invertion.slice';
import dependencySlice from "./states/generals/dependency.slice";

export const store = configureStore({
	reducer: {
		loading: LoadingReducer,
		departament: DepartamentReducer,
		municipality: MunicipalityReducer,
		dependency: dependencySlice,
		invertion: InvertionReducer
	}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;