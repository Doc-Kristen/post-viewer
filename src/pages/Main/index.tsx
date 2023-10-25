import React from 'react'
import { useSelector } from 'react-redux'
import debounce from 'lodash.debounce'
import { useAppDispatch } from '@store/store'
import { calculateVisiblePosts } from '@utils/utils'
import { selectPosts } from '@store/post/selector'
import { setPosts } from '@store/post/slice'
import { Box, Typography } from '@mui/material'
import { useGetPaginatedPostsQuery, useLazyGetPaginatedPostsQuery } from '@services/postApi'
import { ErrorMessage, PostList, Spinner } from '@components/index'

const Main: React.FC = () => {
	const dispatch = useAppDispatch()
	const { posts } = useSelector(selectPosts)

	// Высота каждой строки
	const itemSize = 300
	// Максимальное количество постов (ограничение от API)
	const totalCount = 1000
	// Количество подгружаемых постов при скролле
	const requestStep = 10

	const [moreItemsLoading, setMoreItemsLoading] = React.useState<boolean>(false)

	const firstRenderIndex = calculateVisiblePosts(itemSize) || 1

	const [count, setCount] = React.useState(firstRenderIndex)

	const [loadMorePosts] = useLazyGetPaginatedPostsQuery()

	const { data, isError, isLoading } = useGetPaginatedPostsQuery(count)

	const cache = React.useMemo(() => new Set(posts.map(post => post.date)), [posts])

	const loadMore = async (visibleStartIndex: number, visibleStopIndex: number) => {
		setMoreItemsLoading(true)
		setCount(requestStep)

		const length = visibleStopIndex - visibleStartIndex

		// расчет диапазона постов в зоне видимости
		const indicesInRange = [...Array(length).keys()].map(x => x + visibleStartIndex)

		// проверка наличия требуемых постов из диапазона среди уже полученных
		const postsRetrieved = indicesInRange.some(index =>
			posts[index] ? !!cache.has(posts[index].date) : false,
		)

		// если все посты в зоне видимости уже загружены - пропустить загрузку
		if (postsRetrieved) {
			return
		}

		await loadMorePosts(requestStep)
		if (data) {
			const hasDuoblePost = data.some(post => cache.has(post.date))
			if (!hasDuoblePost) {
				dispatch(setPosts([...posts, ...data]))
			}
		}

		setMoreItemsLoading(false)
	}

	const debouncedLoadMore = debounce(loadMore, 300)

	React.useEffect(() => {
		if (!posts.length && !isLoading && !isError && !!data?.length) {
			dispatch(setPosts(data))
		}
	}, [data, dispatch, isError, isLoading, posts.length])

	if (isError) {
		return <ErrorMessage />
	}

	if (!isLoading && !posts.length && !data?.length)
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
						posts={posts}
						moreItemsLoading={moreItemsLoading}
						loadMore={debouncedLoadMore}
						totalCount={totalCount}
						itemSize={itemSize}
					/>
				)}
			</Box>
		</Box>
	)
}

export default Main
