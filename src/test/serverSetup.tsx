import '@testing-library/jest-dom'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { mockPosts, mockPost } from './mock'

export const getPostByIdHandler = [
	http.get('https://api.nasa.gov/planetary/apod', () => {
		return HttpResponse.json(mockPost)
	}),
]

export const getPaginatedPostsHandler = [
	http.get('https://api.nasa.gov/planetary/apod', () => {
		return HttpResponse.json(mockPosts)
	}),
]
export const errorHandler = [
	http.get('https://api.nasa.gov/planetary/apod', () => {
		return HttpResponse.error()
	}),
]

export const server = setupServer()
