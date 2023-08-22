import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import LoadingReducer from './states/generals/loading.slice';
import CountryReducer from './states/generals/country.slice';
import DepartamentReducer from './states/generals/departament.slice';
import MunicipalityReducer from './states/generals/municipality.slice';
import dependencyReducer from "./states/generals/dependency.slice";

import GeneralReducer from './states/generals/general.slice';
import programReducer from "./states/generals/program.slice";
import objetiveReducer from "./states/generals/objetive.slice";
import categoryReducer from "./states/generals/category.slice";
import unitReducer from "./states/generals/unit.slice";
import goodReducer from "./states/generals/good.slice";

export const store = configureStore({
	reducer: {
		loading: LoadingReducer,
		country: CountryReducer,
		departament: DepartamentReducer,
		municipality: MunicipalityReducer,
		dependency: dependencyReducer,
		program: programReducer,
		unit: unitReducer,
		good: goodReducer,
		objetive: objetiveReducer,
		category: categoryReducer,
		general: GeneralReducer,
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