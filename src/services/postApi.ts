import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TPost } from 'types/TPost'

const BACKEND_URL = 'https://api.nasa.gov/planetary'
const API_KEY = 'jrUx9o5OoXFA2RJjYEwNYQzdJi16B4EnhKSUFO0G'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
	endpoints: builder => ({
		getPostById: builder.query<TPost, string>({
			query: date => `/apod?api_key=${API_KEY}&date=${date}`,
		}),
		getPaginatedPosts: builder.query<TPost[], number>({
			query: count => `/apod?api_key=${API_KEY}&count=${count}`,
		}),
	}),
})

export const { useGetPostByIdQuery, useGetPaginatedPostsQuery, useLazyGetPaginatedPostsQuery } =
	postsApi
