import dayjs from 'dayjs'
import formatDate from '.'

describe('formatDate', () => {
	it('should format a date string to format: DD MMMM YYYY', () => {
		const inputDate = '2023-03-24'
		const expectedFormattedDate = '24 March 2023'

		const result = formatDate(inputDate)

		expect(result).toEqual(expectedFormattedDate)
	})

	it('should format a Date object to format: DD MMMM YYYY', () => {
		const inputDate = new Date(2023, 4, 10)
		const expectedFormattedDate = '10 May 2023'

		const result = formatDate(inputDate)

		expect(result).toEqual(expectedFormattedDate)
	})

	it('should format a dayjs object to format: DD MMMM YYYY', () => {
		const inputDate = dayjs('2023-11-14')
		const expectedFormattedDate = '14 November 2023'

		const result = formatDate(inputDate)

		expect(result).toEqual(expectedFormattedDate)
	})
})
