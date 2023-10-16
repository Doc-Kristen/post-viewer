import { PostItem } from '@components/index'
import { TPost } from 'types/index'
import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import InfiniteLoader from 'react-window-infinite-loader'

type PostListProps = {
	posts: TPost[]
	loadMore: () => void
	moreItemsLoading: boolean
	totalCount: number
}

const PostList: React.FC<PostListProps> = ({ posts, loadMore, totalCount }) => {
	const isItemLoaded = (index: number): boolean => !!posts[index]

	const Row = ({ index, style }: ListChildComponentProps) => {
		return (
			<div style={style}>
				{posts[index] ? (
					<PostItem key={posts[index].id} post={posts[index]} index={index} />
				) : (
					<div>Пост загружается...</div>
				)}
			</div>
		)
	}

	return (
			<AutoSizer>
				{({ height, width }) => (
					<InfiniteLoader
						isItemLoaded={isItemLoaded}
						itemCount={totalCount}
						loadMoreItems={loadMore}>
						{({ onItemsRendered, ref }) => (
							<FixedSizeList
								height={height}
								width={width}
								itemCount={totalCount}
								itemSize={64}
								ref={ref}
								onItemsRendered={onItemsRendered}>
								{Row}
							</FixedSizeList>
						)}
					</InfiniteLoader>
				)}
			</AutoSizer>
	)
}

export default PostList
