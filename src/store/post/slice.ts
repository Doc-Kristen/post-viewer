import { createSlice } from '@reduxjs/toolkit'
import { TPost } from 'types/TPost'

interface userState {
	posts: TPost[]
}

const initialState: userState = {
	posts: [],
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPosts(state, action) {
			state.posts = action.payload
		},
	},
})

export const { setPosts } = postSlice.actions

export default postSlice.reducer
