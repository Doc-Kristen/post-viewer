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

export const makeFakeIndex = (): number => faker.number.int()
