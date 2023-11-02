import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@test/helpers/renderWithRouter'

import NotFound from './index'

describe('Component: NotFound', () => {
	it('should render correctly', () => {
		render(
			<MemoryRouter>
				<NotFound />
			</MemoryRouter>,
		)
		const message = screen.getByText(/Page not found/i)
		expect(message).toBeInTheDocument()
		expect(message).toMatchInlineSnapshot(`
			<p
			  class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-gutterBottom css-1wniyei-MuiTypography-root"
			>
			  Page not found
			</p>
		`)
	})

	it('should redirect to NotFound page when incorrect URL', async () => {
		renderWithRouter(null, '/fake')

		const message = screen.getByText(/Page not found/i)
		expect(message).toBeInTheDocument()
		screen.debug()
	})

	it('should redirect to root url when user clicked to link', async () => {
		renderWithRouter(null, '/fake')

		const link = screen.getByText(/Back to main page/i)
		expect(link).toBeInTheDocument()

		await userEvent.click(link)
		const mainPage = screen.getByTestId('main-page')
		expect(mainPage).toBeInTheDocument()
	})
})
