import { faker } from '@faker-js/faker'
import { formatDate } from '@helpers/utils'
import { TPost } from 'types/TPost'

export const makeFakePost = (): TPost => ({
	title: faker.lorem.paragraph(),
	explanation: faker.lorem.paragraph(),
	url: faker.image.url(),
	hdurl: faker.image.url(),
	copyright: faker.person.fullName(),
	date: formatDate(faker.date.past()),
})

export const fakeDataPosts = Array.from({ length: 5 }, () => makeFakePost())

export const makeFakeIndex = (): number => faker.number.int()

export const mockPost: TPost = {
	title: 'Title test',
	explanation: 'Explanation test',
	url: 'https://example.com/post',
	hdurl: 'https://example.com/post/hd',
	copyright: 'Copyright test',
	date: '2023-11-01',
}

export const mockPosts: TPost[] = [
	{
		title: 'Title test 1',
		explanation: 'Explanation test 1',
		url: 'https://example.com/post1',
		hdurl: 'https://example.com/post1/hd',
		copyright: 'Copyright test 1',
		date: '2023-11-01',
	},
	{
		title: 'Title test 2',
		explanation: 'Explanation test 2',
		url: 'https://example.com/post2',
		hdurl: 'https://example.com/post2/hd',
		copyright: 'Copyright test 2',
		date: '2023-11-02',
	},
	{
		title: 'Title test 3',
		explanation: 'Explanation test 3',
		url: 'https://example.com/post3',
		hdurl: 'https://example.com/post3/hd',
		copyright: 'Copyright test 2',
		date: '2023-11-03',
	},
]
