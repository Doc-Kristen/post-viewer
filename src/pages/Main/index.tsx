import { PostList } from '@components/index'
import { Container } from '@mui/material'
import React from 'react'

const Main: React.FC = () => {
	return (
		<Container maxWidth='xl'>
			<PostList />
		</Container>
	)
}

export default Main
