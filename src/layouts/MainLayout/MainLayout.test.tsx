import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './index'

const FakeComponent = () => <div>Fake text</div>

describe('Component: MainLayout', () => {
	it('should render FakeComponent in MainLayout', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<FakeComponent />} />
					</Route>
				</Routes>
			</MemoryRouter>,
		)
		const component = screen.getByText(/Fake text/i)
		expect(component).toBeInTheDocument()
	})
})
