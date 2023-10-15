import { PostItem } from '@components/index'
import { ListSubheader } from '@mui/material'
import { TPost } from 'types/index'
import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

type PostListProps = {
	posts: TPost[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
	const Row = ({ index, style }: ListChildComponentProps) => (
		<div style={style}>
			<PostItem key={posts[index].id} post={posts[index]} index={index} />
		</div>
	)
	return (
		<div style={{height: '80vh' }}>
			<ListSubheader component='h2' sx={{ fontSize: '30px', margin: '20px' }}>
				Список постов:
			</ListSubheader>
			<AutoSizer>
				{({ height, width }) => (
					<FixedSizeList height={height} width={width} itemCount={100} itemSize={64}>
						{Row}
					</FixedSizeList>
				)}
			</AutoSizer>
		</div>
	)
}

export default PostList
