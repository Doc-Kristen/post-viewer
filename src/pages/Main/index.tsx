import { PostList } from '@components/index'
import { useGetPaginatedPostsQuery } from '@services/postApi'
import { TPost } from 'types/index'
import React from 'react'
import { calculateVisiblePosts } from '@utils/utils'

const Main: React.FC = () => {
	const postHeight = 64

	const [startIndex, setStartIndex] = React.useState<number>(0)
	const [moreItemsLoading, setMoreItemsLoading] = React.useState<boolean>(false)

	const firstRenderIndex = calculateVisiblePosts(postHeight)

	const [stopIndex, setStopIndex] = React.useState(firstRenderIndex)

	const { data, isError, isLoading } = useGetPaginatedPostsQuery({
		startIndex: startIndex,
		stopIndex: stopIndex,
	})

	const posts = (data?.baseQueryReturnValue as TPost[]) || []
	const totalCount = (data?.totalCount as number) || 0

	const [items, setItems] = React.useState<TPost[]>([])

	const loadMore = () => {
		setMoreItemsLoading(true)
		setStartIndex(stopIndex)
		setStopIndex(stopIndex + 10)
		setItems([...items, ...posts])
		setMoreItemsLoading(false)
	}

	if (isLoading) return <div>Загрузка...</div>

	if (isError) return <div>Ошибка загрузки</div>

	if (items.length === 0 && posts.length === 0) return <div>Нет постов</div>

	return (
		<>
			{/* <Container maxWidth='xl'> */}
			<PostList
				posts={items}
				moreItemsLoading={moreItemsLoading}
				loadMore={loadMore}
				totalCount={totalCount}
			/>

			{/* </Container> */}
		</>
	)
}

export default Main
