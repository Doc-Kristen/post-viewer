import { ConfigState } from '@reduxjs/toolkit/dist/query/core/apiState'
import { RootState } from '@store/store'
import { fakeDataPosts } from '@test/mock'
import { selectPosts } from './selector'

const dataPosts = fakeDataPosts

describe('selectPosts', () => {
	it('work with empty state', () => {
		expect(selectPosts({} as RootState)).toEqual([])
	})
	it('work with filled state', () => {
		const result = selectPosts({
			posts: { postList: dataPosts },
			postsApi: {
				queries: {},
				mutations: {},
				provided: '',
				subscriptions: {},
				config: {} as ConfigState<'postsApi'>,
			},
		})
		expect(result).toEqual(dataPosts)
	})
})
