import dayjs from 'dayjs'

const formatDate = (date: string | Date | dayjs.Dayjs) => dayjs(date).format('DD MMMM YYYY')

export default formatDate
