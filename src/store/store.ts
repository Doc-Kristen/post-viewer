import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '@services/postApi'
import post from './post/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
		post,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()