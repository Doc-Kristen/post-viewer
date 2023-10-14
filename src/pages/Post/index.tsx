import { PostContent } from '@components/index'
import { Container } from '@mui/material'
import React from 'react'

const Post: React.FC = () => {
	return (
		<Container maxWidth='xl' sx={{ padding: '30px' }}>
			<PostContent />
		</Container>
	)
}

export default Post
