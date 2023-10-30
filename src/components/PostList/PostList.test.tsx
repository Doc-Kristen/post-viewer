import { screen } from '@testing-library/react'
import { fakeDataPosts } from '@test/mock'
import PostList from './index'
import debounce from 'lodash.debounce'
import { renderWithRouter } from '@test/helpers/renderWithRouter'

const mockProps = {
	posts: fakeDataPosts,
	loadMore: debounce(vitest.fn(), 300),
	moreItemsLoading: false,
	totalCount: 1000,
	itemSize: 100,
}

beforeEach(() => {
	renderWithRouter(
		<PostList
			posts={mockProps.posts}
			moreItemsLoading={mockProps.moreItemsLoading}
			loadMore={mockProps.loadMore}
			totalCount={mockProps.totalCount}
			itemSize={mockProps.itemSize}
		/>,
	)
})

describe('Component: PostList, rendering testing', () => {
	it('should render correctly', () => {
		const postList = screen.getByTestId('post-list')
		const postItem = screen.getAllByTestId('post-item')

		expect(postList).toBeInTheDocument()
		expect(postItem.length).toBeGreaterThan(0)
	})

	it('should render correctly content', () => {
		const post = mockProps.posts[0]
		const title = screen.getByText(post.title)
		const explanation = screen.getByText(post.explanation)

		expect(title).toBeInTheDocument()
		expect(explanation).toBeInTheDocument()
	})
})
