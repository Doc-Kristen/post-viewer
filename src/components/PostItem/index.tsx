import { Box, Button, ListItem, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './PostItem.module.scss'
import { TPost } from 'types/index'

type PostItemProps = {
	post: TPost
	index: number
}

const PostItem: React.FC<PostItemProps> = ({ post, index }) => {
	const { title, explanation, url, date } = post

	const postsUrl = `/posts/${date}`

	return (
		<ListItem
			className={style.root}
			component='li'
			sx={{
				justifyContent: 'start',
				gap: '20px',
				width: '80%',
				margin: '0 auto',
			}}>
			<span className={style.index}>{index + 1}</span>
			<div className={style.test}>
				<img
					width='200px'
					height='200px'
					src={url}
					alt='Photo from NASA archives'
					className={style.img}></img>
			</div>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					justifyContent: 'space-between',
				}}>
				<ListSubheader component='h3' className={style.title}>
					{title}
				</ListSubheader>
				<ListItemText className={style.text}>{explanation}</ListItemText>
				<Link to={postsUrl}>
					<Button variant='contained' className={style.button}>
						View
					</Button>
				</Link>
			</Box>
		</ListItem>
	)
}

export default PostItem
