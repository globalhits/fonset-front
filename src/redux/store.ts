import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import LoadingReducer from './states/generals/loading.slice';
import CountryReducer from './states/generals/country.slice';
import DepartamentReducer from './states/generals/departament.slice';
import MunicipalityReducer from './states/generals/municipality.slice';
import dependencyReducer from "./states/generals/dependency.slice";

import GeneralReducer from './states/generals/general.slice';
import lineProgramReducer from "./states/generals/line-program.slice";
import objetiveDirectionReducer from "./states/generals/objetive-direction.slice";
import actionObjetiveReducer from "./states/generals/action-objetive.slice";

export const store = configureStore({
	reducer: {
		loading: LoadingReducer,
		country: CountryReducer,
		departament: DepartamentReducer,
		municipality: MunicipalityReducer,
		dependency: dependencyReducer,
		general: GeneralReducer,
		lineProgram: lineProgramReducer,
		objetiveDirection: objetiveDirectionReducer,
		actionStrategy: actionObjetiveReducer
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