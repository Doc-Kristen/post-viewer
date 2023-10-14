import { PostItem } from '@components/index'
import { List, ListSubheader } from '@mui/material'
import { mockData } from '@utils/mock'
import React from 'react'

const PostList: React.FC = () => {
	return (
		<div>
			<ListSubheader component='h2' sx={{ fontSize: '30px', margin: '20px' }}>
				Список постов:
			</ListSubheader>
			<List>
				{mockData.map((item, index) => {
					return <PostItem key={item.id} post={item} index={index} />
				})}
			</List>
		</div>
	)
}

export default PostList
