import { Box, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import React from 'react'
import groovyWalkAnimation from './spinner-animation.json'

const Spinner: React.FC = () => {
	return (
		<Box
			data-testid='spinner'
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}>
			<Lottie animationData={groovyWalkAnimation} loop={true} />
			<Typography variant='h6' component='p'>
				Connecting to NASA...
			</Typography>
		</Box>
	)
}

export default Spinner
