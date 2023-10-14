import { PostList } from '@components/index'
import { Container } from '@mui/material'
import { useGetPaginatedPostsQuery } from '@services/postApi'
import React from 'react'

const Main: React.FC = () => {
	const { data, isLoading, error } = useGetPaginatedPostsQuery({ startIndex: 0, stopIndex: 10 })

	if (isLoading) return <div>Загрузка...</div>

	if (error) return <div>Ошибка загрузки</div>

	return (
		<Container maxWidth='xl'>
			<PostList posts={data} />
		</Container>
	)
}

export default Main
