import { PostList } from '@components/index'
import { useGetPaginatedPostsQuery } from '@services/postApi'
import { TPost } from 'types/index'
import React from 'react'
import { calculateVisiblePosts } from '@utils/utils'
import { Box, ListSubheader } from '@mui/material'

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

	if (isLoading) return <div>Загрузка...</div>

	if (isError) return <div>Ошибка загрузки</div>

	if (items.length === 0 && posts.length === 0) return <div>Нет постов</div>

	return (
		<Box
			sx={{
				height: '100%',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<ListSubheader component='h2' sx={{ fontSize: '30px', margin: '20px' }}>
				Список постов:
			</ListSubheader>
			<Box sx={{ height: '100%' }}>
				<PostList
					posts={items}
					moreItemsLoading={moreItemsLoading}
					loadMore={loadMore}
					totalCount={totalCount}
					itemSize={itemSize}
				/>
			</Box>
		</Box>
	)
}

export default Main
