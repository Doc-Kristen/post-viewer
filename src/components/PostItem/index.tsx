import { Button, ListItem, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './PostItem.module.scss'
import { Post } from 'types/index'

type PostItemProps = {
	post: Post
	index: number
}

const PostItem: React.FC<PostItemProps> = ({ post, index }) => {
	const { title, body, id } = post
	const postsUrl = `/posts/${id}`

	return (
		<ListItem
			className={style.root}
			component='li'
			sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<span className={style.index}>{index + 1}</span>
			<ListSubheader component='h3' className={style.title}>
				{title}
			</ListSubheader>
			<ListItemText className={style.text}>{body}</ListItemText>
			<Link to={postsUrl}>
				<Button variant='contained'>Просмотр</Button>
			</Link>
		</ListItem>
	)
}

export default PostItem
