import * as bcrypt from 'bcrypt'

const users = [
  {
    firstName: 'Richard',
    nickName: 'Orpen2024',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    firstName: 'Rafael',
    nickName: 'admin',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    firstName: 'Guilherme',
    nickName: 'lojista',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    firstName: 'Maicon',
    nickName: 'estoquista',
    password: bcrypt.hashSync('1234', 10),
  },
]

export default users