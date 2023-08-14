import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import LoadingReducer from './states/generals/loading.slice';
import DepartamentReducer from './states/generals/departament.slice';
import MunicipalityReducer from './states/generals/municipality.slice';
import dependencyReducer from "./states/generals/dependency.slice";

import InvertionReducer from './states/invertion/invertion.slice';
import FonsetReducer from "./states/fonset/fonset.slice";
import cooperationReducer from "./states/cooperation/cooperation.slice";

export const store = configureStore({
	reducer: {
		loading: LoadingReducer,
		departament: DepartamentReducer,
		municipality: MunicipalityReducer,
		dependency: dependencyReducer,
		invertion: InvertionReducer,
		fonset: FonsetReducer,
		cooperative: cooperationReducer
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