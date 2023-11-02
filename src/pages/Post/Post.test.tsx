import { waitFor } from '@testing-library/react'
import { renderWithProviders } from '@test/helpers/renderWithProviders'
import { mockPost } from '@test/mock'
import {
	configureServerForTesting,
	errorHandler,
	getPostByIdHandler,
	server,
} from '@test/serverSetup'

import Post from '.'

configureServerForTesting()

describe('Component: Post', function () {
	it('should display a loading spinner during data fetching', async () => {
		server.use(...getPostByIdHandler)

		const { getByTestId, queryByTestId } = renderWithProviders(<Post />)
		const spinner = getByTestId('spinner')

		expect(spinner).toBeInTheDocument()

		await waitFor(() => {
			expect(queryByTestId('spinner')).toBeNull()
		})
	})

	it('should correctly render data after data fetching', async () => {
		server.use(...getPostByIdHandler)
		const { getByText, getByAltText } = renderWithProviders(<Post />)

		await waitFor(() => {
			const rgxTitle = new RegExp(mockPost.title, 'i')
			const rgxExplanation = new RegExp(mockPost.explanation, 'i')
			const imageElement = getByAltText('Photo from NASA archives')
			const expectedImageUrl = mockPost.url
			expect(imageElement).toHaveAttribute('src', expectedImageUrl)
			expect(getByText(rgxTitle)).toBeInTheDocument()
			expect(getByText(rgxExplanation)).toBeInTheDocument()
		})
	})

	it('should show an error message when data fetching fails', async () => {
		server.use(...errorHandler)
		const { getByText } = renderWithProviders(<Post />)
		const message = /Error. Please refresh this page or try again later/i

		await waitFor(() => {
			expect(getByText(message)).toBeInTheDocument()
		})
	})
})
