import { PostItem } from '@components/index'
import { TPost } from 'types/index'
import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import InfiniteLoader from 'react-window-infinite-loader'
import { Skeleton } from '@mui/material'

type PostListProps = {
	posts: TPost[]
	loadMore: () => void
	moreItemsLoading: boolean
	totalCount: number
	itemSize: number
}

const PostList: React.FC<PostListProps> = ({ posts, loadMore, totalCount, itemSize }) => {
	// Количество постов ниже поля видимости, когда начинается подгрузка данных
	const overscanCount = 10

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
