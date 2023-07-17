import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import  LoadingReducer  from './states/loading.slice';

export const store = configureStore({
    reducer: {
		loading: LoadingReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState =  ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;