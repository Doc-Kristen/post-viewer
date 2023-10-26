import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@layouts/index'
import { AppRoute } from '@utils/const'
import { Main, NotFound, Post } from '@pages/index'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'

const theme = createTheme({
	palette: {
		primary: {
			main: '#3F51B5',
		},
	},
})

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path={AppRoute.Main} element={<MainLayout />}>
					<Route path='' element={<Main />} />
					<Route path={AppRoute.Post} element={<Post />} />
					<Route path={AppRoute.NotFound} element={<NotFound />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App
