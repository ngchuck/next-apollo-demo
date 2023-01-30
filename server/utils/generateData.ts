import {faker} from "@faker-js/faker";
import {User} from "../types/user";

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const makeData = (...lens: number[]): User[] => {
  const len = lens[0]!
  return range(len).map((): User => ({
    ...getPerson()
  }))
}

const getPerson = (): User => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  age: faker.datatype.number(40),
  address: {
    streetName: faker.address.street()
  }
})

export default makeData;