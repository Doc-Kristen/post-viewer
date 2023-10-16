import { Header } from '@components/index'
import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
	return (
		<>
			<Header />
			<Box sx={{ height: '100%', paddingTop: '80px'}}>
				<Outlet />
			</Box>
		</>
	)
}

export default MainLayout
