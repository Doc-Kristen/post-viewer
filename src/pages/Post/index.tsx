import { AppRoute } from '@helpers/const'
import { ErrorMessage, PostContent, Spinner } from '@components/index'
import { Container } from '@mui/material'
import { useGetPostByIdQuery } from '@services/postApi'

import React from 'react'
import { useParams } from 'react-router-dom'

const Post: React.FC = () => {
	const { id } = useParams()
	const postId = id || ''

	const { data, isLoading, isError } = useGetPostByIdQuery(postId)

	if (isError) return <ErrorMessage link={AppRoute.Main} />
	if (isLoading) {
		return <Spinner />
	}

	if (data) {
		return (
			<Container maxWidth='xl' sx={{ padding: '30px' }}>
				<PostContent post={data} />
			</Container>
		)
	}
}

export default Post
