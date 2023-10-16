import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Spinner: React.FC = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}>
			<CircularProgress />
		</Box>
	)
}

export default Spinner
