import { createSlice } from '@reduxjs/toolkit'
import { TPost } from 'types/TPost'

interface postSliceState {
	postList: TPost[]
}

const initialState: postSliceState = {
	postList: [],
}

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts(state, action) {
			state.postList = action.payload
		},
	},
})

export const { setPosts } = postSlice.actions

export default postSlice.reducer
