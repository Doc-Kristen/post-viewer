import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from '@store/store.ts'
import { Provider } from 'react-redux'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
)
