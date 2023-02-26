import { UserEntity } from './src/domain/entities'

const user = new UserEntity({
  name: 'shawn, lee',
  email: 'shawn@email.com',
  pwd: '',
})

console.log(user)
// console.log(user.toJSON())
