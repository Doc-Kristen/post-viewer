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
		}),
	}),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetPaginatedPostsQuery } = postsApi
