import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BACKEND_URL = 'https://jsonplaceholder.typicode.com'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
	endpoints: builder => ({
		getAllPosts: builder.query({
			query: () => '/posts',
		}),
		getPostById: builder.query({
			query: id => `/posts/${id}`,
		}),
		getPaginatedPosts: builder.query({
			query: ({ startIndex, stopIndex }) => `/posts?_start=${startIndex}&_end=${stopIndex}`,
			transformResponse(baseQueryReturnValue, meta) {
				return {
					baseQueryReturnValue,
					totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
				}
			},
		}),
	}),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetPaginatedPostsQuery } = postsApi
