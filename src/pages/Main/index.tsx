import { PostList } from '@components/index'
import { useGetPaginatedPostsQuery } from '@services/postApi'
import { TPost } from 'types/index'
import React from 'react'
import { calculateVisiblePosts } from '@utils/utils'
import { Alert, Box, CircularProgress, Typography } from '@mui/material'

const Main: React.FC = () => {
	// Высота каждой строки
	const itemSize = 100

	const [startIndex, setStartIndex] = React.useState<number>(0)
	const [moreItemsLoading, setMoreItemsLoading] = React.useState<boolean>(false)

	const firstRenderIndex = calculateVisiblePosts(itemSize)

	const [stopIndex, setStopIndex] = React.useState(firstRenderIndex)

	const { data, isError, isLoading } = useGetPaginatedPostsQuery({
		startIndex: startIndex,
		stopIndex: stopIndex,
	})

	const posts = (data?.baseQueryReturnValue as TPost[]) || []
	const totalCount = (data?.totalCount as number) || 0

	const [items, setItems] = React.useState<TPost[]>([])

	const loadMore = () => {
		const requestStep = 5
		const newStartIndex = stopIndex < totalCount ? stopIndex : totalCount - 1
		const newStopIndex =
			newStartIndex + requestStep < totalCount ? newStartIndex + requestStep : totalCount

		setMoreItemsLoading(true)

		setStartIndex(newStartIndex)
		setStopIndex(newStopIndex)
		setItems([...items, ...posts])

		setMoreItemsLoading(false)
	}

	if (isError) return <Alert severity='error'>Ошибка загрузки. Попробуйте позже</Alert>

	if (!isLoading && items.length === 0 && posts.length === 0)
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
			}}>
			<Box sx={{ height: '100%' }}>
				{isLoading ? (
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}>
						<CircularProgress />
					</Box>
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
