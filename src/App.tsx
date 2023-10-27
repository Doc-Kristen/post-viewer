import React from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import AppRouter from '@routes/AppRouter'

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
			<AppRouter />
		</ThemeProvider>
	)
}

export default App
