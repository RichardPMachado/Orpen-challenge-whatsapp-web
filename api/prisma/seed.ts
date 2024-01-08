import * as bcrypt from 'bcrypt'
import prisma from '../src/lib/prisma'

const users = [
  {
    firstName: 'Richard',
    nickName: 'RiOrpen2024',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    firstName: 'Rafael',
    nickName: 'Rafael-Orpen',
    password: bcrypt.hashSync('#RichardOrpen2024', 10),
  },
  {
    firstName: 'Guilherme',
    nickName: 'Guilherme-Orpen',
    password: bcrypt.hashSync('#RichardOrpen2024', 10),
  },
  {
    firstName: 'Maicon',
    nickName: 'Maicon-Orpen',
    password: bcrypt.hashSync('#RichardOrpen2024', 10),
  },
]

async function seedUsers() {
  // _RPM
  await Promise.all(
    users.map(async (user) => {
      const createdUser = await prisma.user.upsert({
        where: {
          nickName: user.nickName,
        },
        create: {
          ...user,
        },
        update: {},
      })

      console.log(`User with id ${createdUser.id} created successfully`)
    }),
  )
}

async function main() {
  // _RPM
  console.log('Start seeding...')
  await seedUsers()
  console.log('seed completed!!!')
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })