import { waitFor } from '@testing-library/react'
import { renderWithProviders } from '@test/helpers/renderWithProviders'
import { mockPosts } from '@test/mock'
import {
	configureServerForTesting,
	emptyResponseHandler,
	errorHandler,
	getPaginatedPostsHandler,
	server,
} from '@test/serverSetup'

import Main from '.'
import { faker } from '@faker-js/faker'

configureServerForTesting()

const randomPostIndex = faker.number.int({ min: 0, max: mockPosts.length - 1 })

describe('Component: Main', function () {
	it('should display a loading spinner during data fetching', async () => {
		server.use(...getPaginatedPostsHandler)

		const { getByTestId, queryByTestId } = renderWithProviders(<Main />)
		const spinner = getByTestId('spinner')

		expect(spinner).toBeInTheDocument()

		await waitFor(() => {
			expect(queryByTestId('spinner')).toBeNull()
		})
	})

	it('should correctly render data after data fetching', async () => {
		server.use(...getPaginatedPostsHandler)
		const { getAllByTestId, getByTestId } = renderWithProviders(<Main />)
		const mainPage = getByTestId('main-page')

		await waitFor(() => {
			expect(mainPage).toBeInTheDocument()
			const posts = getAllByTestId('post-item')
			expect(posts.length).toBeGreaterThan(0)
		})
	})

	it('should correctly display a random post after data fetching', async () => {
		server.use(...getPaginatedPostsHandler)
		const { getByText, getAllByAltText } = renderWithProviders(<Main />)

		await waitFor(() => {
			const rgxTitle = new RegExp(mockPosts[randomPostIndex].title, 'i')
			const rgxExplanation = new RegExp(mockPosts[randomPostIndex].explanation, 'i')
			const imageElements = getAllByAltText('Photo from NASA archives')
			const imageElement = imageElements[randomPostIndex]
			const expectedImageUrl = mockPosts[randomPostIndex].url
			expect(imageElement).toHaveAttribute('src', expectedImageUrl)
			expect(getByText(rgxTitle)).toBeInTheDocument()
			expect(getByText(rgxExplanation)).toBeInTheDocument()
		})
	})

	it('should show an message "No Posts" when data fetching', async () => {
		server.use(...emptyResponseHandler)
		const { getByText } = renderWithProviders(<Main />)
		const message = /No Posts/i

		await waitFor(() => {
			expect(getByText(message)).toBeInTheDocument()
		})
	})

	it('should show an error message when data fetching fails', async () => {
		server.use(...errorHandler)
		const { getByText } = renderWithProviders(<Main />)
		const message = /Error. Please refresh this page or try again later/i

		await waitFor(() => {
			expect(getByText(message)).toBeInTheDocument()
		})
	})
})
