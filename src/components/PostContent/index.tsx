import { Button, Container, Paper, Typography } from '@mui/material'
import { TPost } from 'types/TPost'
import { AppRoute } from '@utils/const'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './PostContent.module.scss'

type PostContentProps = {
	post: TPost
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
	const { title, explanation, url, date, copyright } = post
	const postDate = new Date(date).toLocaleDateString()
	return (
		<Paper elevation={3} className={style.root}>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '30px',
					padding: '30px',
				}}>
				<Typography variant='h5' component='h1' gutterBottom>
					{title || ''}
				</Typography>
				<img
					width={400}
					height={400}
					src={url}
					alt='Photo from NASA archives'
					className={style.img}></img>
				<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }} gutterBottom>
					Date: {postDate}
				</Typography>
				{copyright && (
					<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }} gutterBottom>
						Author: {copyright}
					</Typography>
				)}
				<Typography variant='subtitle1' gutterBottom>
					{explanation || ''}
				</Typography>
				<Link to={AppRoute.Main}>
					<Button variant='contained'>Go back</Button>
				</Link>
			</Container>
		</Paper>
	)
}

export default PostContent
