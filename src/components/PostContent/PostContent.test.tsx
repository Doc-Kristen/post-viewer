import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { renderWithRouter } from '@test/helpers/renderWithRouter'
import userEvent from '@testing-library/user-event'
import { makeFakePost } from '@test/mock'

import PostContent from './index'

const mockProps = makeFakePost()

const { title, explanation, date, copyright } = mockProps

describe('Component: PostContent, rendering testing', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<PostContent post={mockProps} />
			</MemoryRouter>,
		)
	})

	it('should render correctly title', () => {
		const titlePost = screen.getByText(title)
		expect(titlePost).toBeInTheDocument()
	})

	it('should render correctly explanation', () => {
		const explanationPost = screen.getByText(explanation)
		expect(explanationPost).toBeInTheDocument()
	})

	it('should render correctly date', () => {
		const datePost = screen.getByText(`Date: ${date}`)
		expect(datePost).toBeInTheDocument()
	})

	it('should render correctly copyright', () => {
		const copyrightPost = screen.getByText(`Author: ${copyright}`)
		expect(copyrightPost).toBeInTheDocument()
	})

	it('should render correctly image', () => {
		const imageElement = screen.getByRole('img')
		expect(imageElement).toBeInTheDocument()
		const imageAlt = screen.getByAltText(/Photo from NASA archives/i)
		expect(imageAlt).toBeInTheDocument()
	})
})

describe('Component: PostContent, routing testing', () => {
	it('should redirect to main page when user clicked to link', async () => {
		renderWithRouter(<PostContent post={mockProps} />, `/posts/${date}`)
		const link = screen.getByTestId('link-to-main')
		expect(link).toBeInTheDocument()
		await userEvent.click(link)
		const mainPage = screen.getByTestId('main-page')
		expect(mainPage)
	})
})
