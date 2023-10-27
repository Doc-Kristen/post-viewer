import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { renderWithRouter } from '@test/helpers/renderWithRouter'
import ErrorMessage from './index'

describe('Component: ErrorMessage', () => {
	it('should render correctly', () => {
		render(
			<MemoryRouter>
				<ErrorMessage link='/' />
			</MemoryRouter>,
		)
		const message = screen.getByText(/Error. Please refresh this page or try again later/i)
		expect(message).toBeInTheDocument()
		expect(message).toMatchInlineSnapshot(`
			<div
			  class="MuiAlert-message css-1pxa9xg-MuiAlert-message"
			>
			  Error. Please refresh this page or try again later
			</div>
		`)
	})

	it('should not render link when link prop is not provided (using defaultProps)', () => {
		render(
			<MemoryRouter>
				<ErrorMessage />
			</MemoryRouter>,
		)
		const link = screen.queryByText(/Back/i)
		expect(link).toBeNull()
		expect(link).toMatchInlineSnapshot('null')
	})

	it('should redirect to root url when user clicked to link', async () => {
		renderWithRouter(<ErrorMessage link='/' />)

		const link = screen.getByText(/Back/i)
		expect(link).toBeInTheDocument()
		await userEvent.click(link)
		const mainPage = screen.getByTestId('main-page')
		expect(mainPage).toBeInTheDocument()
	})
})
