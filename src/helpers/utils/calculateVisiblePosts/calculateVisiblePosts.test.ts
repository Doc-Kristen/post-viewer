import calculateVisiblePosts from '.'

describe('calculateVisiblePosts', () => {
	it('should calculate visible posts count correctly', () => {
		// Имитация высоты окна браузера
		Object.defineProperty(window, 'innerHeight', { value: 500 })

		const elementHeight = 100

		const visiblePostsCount = calculateVisiblePosts(elementHeight)

		expect(visiblePostsCount).toEqual(5)
	})
})
