import React from 'react'
import { Box, Typography } from '@mui/material'
import { useGetPaginatedPostsQuery, useLazyGetPaginatedPostsQuery } from '@services/postApi'
import { calculateVisiblePosts } from '@utils/utils'
import { TPost } from 'types/index'
import { ErrorMessage, PostList, Spinner } from '@components/index'

const Main: React.FC = () => {
	// Высота каждой строки
	const itemSize = 300
	// Максимальное количество постов (ограничение от API)
	const totalCount = 1000
	// Количество подгружаемых постов при скролле
	const requestStep = 5

	const [moreItemsLoading, setMoreItemsLoading] = React.useState<boolean>(false)

	const firstRenderIndex = calculateVisiblePosts(itemSize) || 1

	const [count, setCount] = React.useState(firstRenderIndex)

	const [loadMorePosts] = useLazyGetPaginatedPostsQuery()

	const { data, isError, isLoading } = useGetPaginatedPostsQuery(count)

	const [items, setItems] = React.useState<TPost[]>([])

	const loadMore = async () => {
		setMoreItemsLoading(true)
		setCount(requestStep)

		await loadMorePosts(requestStep)
		if (data) {
			setItems([...items, ...data])
		}

		setMoreItemsLoading(false)
	}

	if (isError) {
		return <ErrorMessage />
	}

	if (!isLoading && !items.length && !data?.length)
		return (
			<Typography component='p' variant='h5' sx={{ margin: '15px' }}>
				Нет постов
			</Typography>
		)

	return (
		<Box
			sx={{
				height: '100%',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			<Box sx={{ height: '100%' }}>
				{isLoading ? (
					<Spinner />
				) : (
					<PostList
						posts={items}
						moreItemsLoading={moreItemsLoading}
						loadMore={loadMore}
						totalCount={totalCount}
						itemSize={itemSize}
					/>
				)}
			</Box>
		</Box>
	)
}

export default Main
