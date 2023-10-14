import { Button, Container, Typography } from '@mui/material'
import { AppRoute } from '@utils/const'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
	return (
		<Container
			maxWidth='xl'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '30px',
				padding: '30px',
			}}>
			<Typography variant='h4' component='h1' gutterBottom>
				Ошибка 404
			</Typography>
			<Typography variant='subtitle1' component='p' gutterBottom>
				Страница не найдена.
			</Typography>
			<Link to={AppRoute.Main}>
				<Button variant='contained'>Вернуться на главную страницу</Button>
			</Link>
		</Container>
	)
}

export default NotFound
