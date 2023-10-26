import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './index'

describe('Component: Header', () => {
	it('should render correctly', () => {
		render(
			<Router>
				<Header />
			</Router>,
		)
		const title = screen.queryByText(/PostViewer/i)
		expect(title).toBeVisible()
	})
})
