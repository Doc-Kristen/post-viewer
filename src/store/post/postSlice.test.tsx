import postsReducer, { setPosts } from '@store/post/slice'
import { fakeDataPosts } from '@test/mock'

const posts = fakeDataPosts

describe('postSlice', () => {
	it('should return default state when passed an empty action', () => {
		expect(postsReducer(undefined, { type: '' })).toEqual({ postList: [] })
	})
	it('should add new posts with "setPosts" action', () => {
		const result = postsReducer({ postList: [] }, setPosts(posts))

		expect(result.postList).toEqual(posts)
	})
})
