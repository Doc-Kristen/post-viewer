import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import InfiniteLoader from 'react-window-infinite-loader'
import { Skeleton } from '@mui/material'
import { PostItem } from '@components/index'
import { TPost } from 'types/index'
import { DebouncedFunc } from 'lodash'

type PostListProps = {
	posts: TPost[]
	loadMore: DebouncedFunc<(visibleStartIndex: number, visibleStopIndex: number) => Promise<void>>
	totalCount: number
	itemSize: number
}

const PostList: React.FC<PostListProps> = ({ posts, loadMore, totalCount, itemSize }) => {
	const defaultListHeight = itemSize * totalCount

	// Количество постов ниже поля видимости когда начинается подгрузка данных
	const overscanCount = 15

	// Показатель, отвечающий за предзагрузку постов
	const threshold = 10

	const storedIndex = Number(localStorage.getItem('selectedPostIndex'))

	// позиция скролла при первом рендере (восстановление позиции при возврате на страницу)
	const initialScrollOffset = storedIndex ? itemSize * (storedIndex - 1) : 0

	React.useEffect(() => {
		if (storedIndex !== null) {
			localStorage.removeItem('selectedPostIndex')
		}
	}, [storedIndex])

	const isItemLoaded = (index: number): boolean => !!posts[index]

	const Row = ({ index, style }: ListChildComponentProps) => {
		if (index >= totalCount) return null
		return (
			<div style={style}>
				{posts[index] ? (
					<PostItem key={posts[index].date} post={posts[index]} index={index} />
				) : (
					<Skeleton height={itemSize} sx={{ width: '80%', margin: '0 auto' }} />
				)}
			</div>
		)
	}

	return (
		<AutoSizer data-testid='post-list'>
			{({ height, width }) => (
				<InfiniteLoader
					isItemLoaded={isItemLoaded}
					itemCount={totalCount}
					loadMoreItems={loadMore}
					threshold={threshold}>
					{({ onItemsRendered, ref }) => (
						<FixedSizeList
							height={height || defaultListHeight}
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
