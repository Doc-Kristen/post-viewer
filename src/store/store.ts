import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '@services/postApi'
import { useDispatch } from 'react-redux'
import { rootReducer } from './root-reducer'

const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
	})
}

export const store = createReduxStore()

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
