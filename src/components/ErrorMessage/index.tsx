import { Alert, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type ErrorMessageProps = {
	status?: number
	link?: string
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ status, link }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
			{status && (
				<Typography variant='h4' component='p'>
					{status}
				</Typography>
			)}
			<Alert severity='error'>Error. Please refresh this page or try again later</Alert>
			{link && (
				<Link to={link}>
					<Button variant='contained'>Back to main page</Button>
				</Link>
			)}
		</Box>
	)
}

export default ErrorMessage
