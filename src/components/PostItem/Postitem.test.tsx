import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PostItem from './index'
import { makeFakeIndex, makeFakePost } from '@test/mock'
import { renderWithRouter } from '@test/helpers/renderWithRouter'
import userEvent from '@testing-library/user-event'

const mockProps = {
	post: makeFakePost(),
	index: makeFakeIndex(),
}

const { title, explanation } = mockProps.post

describe('Component: PostItem, rendering testing', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<PostItem {...mockProps} />
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

	it('should render correctly image', () => {
		const imageElement = screen.getByRole('img')
		expect(imageElement).toBeInTheDocument()
		const imageAlt = screen.getByAltText(/Photo from NASA archives/i)
		expect(imageAlt).toBeInTheDocument()
	})
})

describe('Component: PostItem, routing testing', () => {
	it('should redirect to page Post when user clicked to link', async () => {
		renderWithRouter(<PostItem {...mockProps} />)
		const postPage = screen.queryByTestId('post-page')
		const link = screen.getByTestId('item-link')
		expect(link).toBeInTheDocument()
		await userEvent.click(link)
		expect(postPage).toBeInTheDocument
	})
})
