import React from 'react'
import { useSelector } from 'react-redux'
import debounce from 'lodash.debounce'
import { useAppDispatch } from '@store/store'
import { selectPosts } from '@store/post/selector'
import { setPosts } from '@store/post/slice'
import { Box, Typography } from '@mui/material'
import { useGetPaginatedPostsQuery, useLazyGetPaginatedPostsQuery } from '@services/postApi'
import { ErrorMessage, PostList, Spinner } from '@components/index'
import { calculateVisiblePosts } from '@utils/index'
import { TPost } from 'types/TPost'

const Main: React.FC = () => {
	const dispatch = useAppDispatch()
	const posts = useSelector(selectPosts)

	// Высота каждой строки
	const itemSize = 300
	// Общее количество постов (ограничение от API)
	const totalCount = 1000

	// Количество подгружаемых постов при скролле
	const requestStep = 20

	// Расчет количества постов для первой отрисовки
	const firstRenderIndex =
		calculateVisiblePosts(itemSize) > requestStep ? calculateVisiblePosts(itemSize) : requestStep

	const [loadMorePosts] = useLazyGetPaginatedPostsQuery()

	const { data, isError, isLoading } = useGetPaginatedPostsQuery(firstRenderIndex)

	const loadMore = async (visibleStartIndex: number) => {
		await loadMorePosts(requestStep)
		if (data) {
			const newPosts = [...posts]
			data.forEach((item: TPost, index: number) => {
				const newIndex = index + visibleStartIndex
				if (!newPosts[newIndex]) {
					newPosts[newIndex] = item
				}
			})
			dispatch(setPosts(newPosts))
		}
	}

	const debouncedLoadMore = debounce(loadMore, 300)

	if (isError) {
		return <ErrorMessage />
	}

	if (!isLoading && !posts.length && !data?.length)
		return (
			<Typography component='p' variant='h5' sx={{ margin: '15px' }}>
				No Posts
			</Typography>
		)

	return (
		<Box
			data-testid='main-page'
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
