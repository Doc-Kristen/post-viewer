import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { AppStore, RootState } from '@store/store'
import { rootReducer } from '@store/root-reducer'
import { postsApi } from '@services/postApi'
import { MemoryRouter } from 'react-router-dom'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>
	store?: AppStore
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = configureStore({
			reducer: rootReducer,
			preloadedState,
			middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
		}),
		...renderOptions
	}: ExtendedRenderOptions = {},
) {
	function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
		return (
			<Provider store={store}>
				<MemoryRouter>{children}</MemoryRouter>
			</Provider>
		)
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
