import AppRouter from '@routes/AppRouter'
import { store } from '@store/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

export const renderWithRouter = (component: React.ReactNode | null, initialRoute = '/') => {
	render(
		<Provider store={store}>
			<MemoryRouter initialEntries={[initialRoute]}>
				<AppRouter />
				{component}
			</MemoryRouter>
		</Provider>,
	)
}
