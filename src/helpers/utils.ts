import dayjs from 'dayjs'

export const calculateVisiblePosts = (elementHeight: number) => {
	const visiblePostsCount = Math.ceil(window.innerHeight / elementHeight)
	return visiblePostsCount
}

export const formatDate = (date: string | Date | dayjs.Dayjs) =>
	dayjs(date).format('YYYY-MM-DD')
