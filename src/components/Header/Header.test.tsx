import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
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
	})
})
