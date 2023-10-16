import { ErrorMessage, PostContent, Spinner } from '@components/index'
import { Container } from '@mui/material'
import { useGetPostByIdQuery } from '@services/postApi'
import { AppRoute } from '@utils/const'
import React from 'react'
import { useParams } from 'react-router-dom'

const Post: React.FC = () => {
	const { id } = useParams()

	const { data, isLoading, isError } = useGetPostByIdQuery(id)

	if (isError)
		return (
			<ErrorMessage
				message='Ошибка. Проверьте правильность запроса или повторите позже.'
				link={AppRoute.Main}
			/>
		)

	return (
		<Container maxWidth='xl' sx={{ padding: '30px' }}>
			{isLoading ? <Spinner /> : <PostContent title={data?.title} body={data?.body} />}
		</Container>
	)
}

export default Post
