import { PostContent } from '@components/index'
import { Container } from '@mui/material'
import { useGetPostByIdQuery } from '@services/postApi'
import React from 'react'
import { useParams } from 'react-router-dom'

const Post: React.FC = () => {
	const { id } = useParams()

	const { data, isError, isLoading } = useGetPostByIdQuery(id)

	if (isLoading) return <div>Загрузка...</div>

	if (isError) return <div>Ошибка загрузки</div>

	return (
		<Container maxWidth='xl' sx={{ padding: '30px' }}>
			<PostContent title={data.title} body={data.body} />
		</Container>
	)
}

export default Post
