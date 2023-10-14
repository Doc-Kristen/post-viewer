import { Button, Container, Paper, Typography } from '@mui/material'
import { AppRoute } from '@utils/const'
import React from 'react'
import { Link } from 'react-router-dom'

const PostContent: React.FC = () => {
	return (
		<Paper elevation={3}>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '30px',
					padding: '30px',
				}}>
				<Typography variant='h4' component='h1' gutterBottom>
					Заголовок поста
				</Typography>
				<Typography variant='subtitle1' gutterBottom>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, ratione! Exercitationem
					quia explicabo voluptate beatae amet quam dolores dolorem veritatis tenetur alias culpa
					ex, quidem quo adipisci iusto corrupti aspernatur totam magni.
				</Typography>
				<Link to={AppRoute.Main}>
					<Button variant='contained'>Назад</Button>
				</Link>
			</Container>
		</Paper>
	)
}

export default PostContent
