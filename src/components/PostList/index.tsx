import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import InfiniteLoader from 'react-window-infinite-loader'
import { Skeleton } from '@mui/material'
import { PostItem } from '@components/index'
import { TPost } from 'types/index'

type PostListProps = {
	posts: TPost[]
	loadMore: (visibleStartIndex: number, visibleStopIndex: number) => Promise<void>
	moreItemsLoading: boolean
	totalCount: number
	itemSize: number
}

const PostList: React.FC<PostListProps> = ({ posts, loadMore, totalCount, itemSize }) => {
	// Количество постов ниже поля видимости когда начинается подгрузка данных
	const overscanCount = 10

	const storedIndex = Number(localStorage.getItem('selectedPostIndex'))
	// позиция скролла при первом рендере (восстановление позиции при возврате на страницу)
	const initialScrollOffset = storedIndex ? itemSize * storedIndex - itemSize : 0

	React.useEffect(() => {
		if (storedIndex !== null) {
			localStorage.removeItem('selectedPostIndex')
		}
	}, [storedIndex])

	const isItemLoaded = (index: number): boolean => !!posts[index]

	const Row = ({ index, style }: ListChildComponentProps) => (
		<div style={style}>
			{posts[index] ? (
				<PostItem key={posts[index].date} post={posts[index]} index={index} />
			) : (
				<Skeleton height={itemSize} sx={{ width: '80%', margin: '0 auto' }} />
			)}
		</div>
	)

	return (
		<AutoSizer>
			{({ height, width }) => (
				<InfiniteLoader isItemLoaded={isItemLoaded} itemCount={totalCount} loadMoreItems={loadMore}>
					{({ onItemsRendered, ref }) => (
						<FixedSizeList
							height={height}
							width={width}
							itemCount={totalCount}
							itemSize={itemSize}
							ref={ref}
							initialScrollOffset={initialScrollOffset}
							onItemsRendered={onItemsRendered}
							overscanCount={overscanCount}>
							{Row}
						</FixedSizeList>
					)}
				</InfiniteLoader>
			)}
		</AutoSizer>
	)
}

export default PostList
