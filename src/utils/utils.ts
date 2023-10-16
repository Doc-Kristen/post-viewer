export const calculateVisiblePosts = (elementHeight: number) => {
	const visiblePostsCount = Math.ceil(window.innerHeight / elementHeight)
	return visiblePostsCount
}
