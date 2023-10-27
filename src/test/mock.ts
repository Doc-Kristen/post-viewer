import { faker } from '@faker-js/faker'
import { TPost } from 'types/TPost'

export const makeFakePost = (): TPost => ({
	title: faker.lorem.paragraph(),
	explanation: faker.lorem.paragraph(),
	url: faker.image.url(),
	hdurl: faker.image.url(),
	copyright: faker.lorem.text(),
	date: faker.date.anytime().toString(),
})

export const makeFakeIndex = (): number => faker.number.int()
