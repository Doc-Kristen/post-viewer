import { Button, Container, Paper, Typography } from '@mui/material'
import { AppRoute } from '@utils/const'
import React from 'react'
import { Link } from 'react-router-dom'

type PostContentProps = {
	title: string
	body: string
}

const PostContent: React.FC<PostContentProps> = ({ title, body }) => {
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
					{title}
				</Typography>
				<Typography variant='subtitle1' gutterBottom>
					{body}
				</Typography>
				<Link to={AppRoute.Main}>
					<Button variant='contained'>Назад</Button>
				</Link>
			</Container>
		</Paper>
	)
}

export default PostContent
