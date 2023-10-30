import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { renderWithRouter } from '@test/helpers/renderWithRouter'

import Header from './index'

describe('Component: Header', () => {
	it('should render correctly', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		)
		const title = screen.getByText(/PostViewer/i)
		expect(title).toBeVisible()
		expect(title).toMatchInlineSnapshot(`
			<h6
			  class="MuiTypography-root MuiTypography-h6 css-2ulfj5-MuiTypography-root"
			>
			  PostViewer
			</h6>
		`)
	})

	it('should redirect to root url when user clicked to link', async () => {
		// Header уже есть в layout
		renderWithRouter(null, '/posts/2023-10-27')

		const link = screen.getByTestId('main-link')
		expect(link).toBeInTheDocument()
		await userEvent.click(link)
		const mainPage = screen.getByTestId('main-page')
		expect(mainPage).toBeInTheDocument()
	})
})
