import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './post/slice'
import { postsApi } from '@services/postApi'

export const rootReducer = combineReducers({

	[postsApi.reducerPath]: postsApi.reducer,
	posts: postReducer,
})
