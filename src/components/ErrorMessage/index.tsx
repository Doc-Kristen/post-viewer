import { Alert, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type ErrorMessageProps = {
	message?: string
	status?: number
	link?: string
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'Ошибка', status, link }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
			{status && (
				<Typography variant='h4' component='p'>
					{status}
				</Typography>
			)}
			<Alert severity='error'>{message}</Alert>
			{link && (
				<Link to={link}>
					<Button variant='contained'>Назад</Button>
				</Link>
			)}
		</Box>
	)
}

export default ErrorMessage
