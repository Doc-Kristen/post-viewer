import { PostList } from '@components/index'
import { Container } from '@mui/material'
import { useGetAllPostsQuery } from '@services/postApi'
import React from 'react'

const Main: React.FC = () => {
	const { data, isLoading, error } = useGetAllPostsQuery('')

	if (isLoading) return <div>Загрузка...</div>

	if (error) return <div>Ошибка загрузки</div>

	return (
		<Container>
			<PostList posts={data} />
		</Container>
	)
}

export default Main
