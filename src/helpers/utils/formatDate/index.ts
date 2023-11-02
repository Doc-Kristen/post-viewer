import dayjs from 'dayjs'

const formatDate = (date: string | Date | dayjs.Dayjs) => dayjs(date).format('YYYY-MM-DD')

export default formatDate
