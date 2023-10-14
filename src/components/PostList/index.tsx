import { PostItem } from '@components/index'
import { List, ListSubheader } from '@mui/material'
import { TPost } from 'types/index'
import React from 'react'

type PostListProps = {
	posts: TPost[]
}

const PostList: React.FC<PostListProps> = ({posts}) => {
	return (
		<div>
			<ListSubheader component='h2' sx={{ fontSize: '30px', margin: '20px' }}>
				Список постов:
			</ListSubheader>
			<List>
				{posts.map((item, index) => {
					return <PostItem key={item.id} post={item} index={index} />
				})}
			</List>
		</div>
	)
}

export default PostList
