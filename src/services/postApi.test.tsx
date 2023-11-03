import { useGetPaginatedPostsQuery, useGetPostByIdQuery } from '@services/postApi'
import { store } from '@store/store'
import { fakeDataPosts, makeFakePost } from '@test/mock'
import { renderHook, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { fetchMocker } from '@test/setup'

const BACKEND_URL = 'https://api.nasa.gov/planetary'
const API_KEY = 'jrUx9o5OoXFA2RJjYEwNYQzdJi16B4EnhKSUFO0G'

fetchMocker.enableMocks()

beforeEach(() => {
	fetchMocker.resetMocks()
})

function wrapper({ children }: { children: ReactNode }) {
	return <Provider store={store}>{children}</Provider>
}

describe('useGetPaginatedPostsQuery', () => {
	const endpointName = 'getPaginatedPosts'

	it('fetches data successfully', async () => {
		const count = 5
		const data = fakeDataPosts
		fetchMocker.mockOnceIf(`${BACKEND_URL}/apod?api_key=${API_KEY}&count=${count}`, () =>
			Promise.resolve({
				status: 200,
				body: JSON.stringify({ data }),
			}),
		)

		const { result } = renderHook(() => useGetPaginatedPostsQuery(count), {
			wrapper,
		})

		expect(result.current).toMatchObject({
			status: 'pending',
			endpointName,
			isLoading: true,
			isSuccess: false,
			isError: false,
			isFetching: true,
		})

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true)
		})
		expect(fetchMocker).toBeCalledTimes(1)

		expect(result.current.currentData).toEqual({
			data: fakeDataPosts,
		})
	})
	it('fetches data error', async () => {
		const count = 10
		fetchMocker.mockOnceIf(`${BACKEND_URL}/apod?api_key=${API_KEY}&count=${count}`, () =>
			Promise.resolve({
				status: 500,
				body: JSON.stringify('Internal Server Error'),
			}),
		)

		const { result } = renderHook(() => useGetPaginatedPostsQuery(count), {
			wrapper,
		})

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(false)
			expect(result.current.status).toBe('rejected')
			expect(result.current.isError).toBe(true)
			expect(result.current.error).toContain({ status: 500, data: 'Internal Server Error' })
		})
	})
})

describe('useGetPostByIdQuery', () => {
	const endpointName = 'getPostById'

	it('fetches data successfully', async () => {
		const fakeDate = '2023-11-02'
		const data = makeFakePost()

		fetchMocker.mockOnceIf(`${BACKEND_URL}/apod?api_key=${API_KEY}&date=${fakeDate}`, () =>
			Promise.resolve({
				status: 200,
				body: JSON.stringify({ data }),
			}),
		)
		const { result } = renderHook(() => useGetPostByIdQuery(fakeDate), {
			wrapper,
		})

		expect(result.current).toMatchObject({
			status: 'pending',
			endpointName,
			isLoading: true,
			isSuccess: false,
			isError: false,
			isFetching: true,
		})

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true)
		})
		expect(fetchMocker).toBeCalledTimes(1)

		expect(result.current.currentData).toEqual({
			data,
		})
	})

	it('fetches data error', async () => {
		const fakeDate = '2023-11-03'

		fetchMocker.mockOnceIf(`${BACKEND_URL}/apod?api_key=${API_KEY}&date=${fakeDate}`, () =>
			Promise.resolve({
				status: 500,
				body: JSON.stringify('Internal Server Error'),
			}),
		)

		const { result } = renderHook(() => useGetPostByIdQuery(fakeDate), {
			wrapper,
		})

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(false)
			expect(result.current.status).toBe('rejected')
			expect(result.current.isError).toBe(true)
			expect(result.current.error).toContain({ status: 500, data: 'Internal Server Error' })
		})
	})
})
