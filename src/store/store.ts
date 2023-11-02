import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '@services/postApi'
import { useDispatch } from 'react-redux'
import { rootReducer } from './root-reducer'

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
	})

export const store = setupStore()

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
