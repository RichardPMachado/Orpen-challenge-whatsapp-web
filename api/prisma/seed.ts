import * as bcrypt from 'bcrypt'
import prisma from '../src/lib/prisma'

const users = [
  {
    id: 1,
    firstName: 'Rafael',
    nickName: 'Rafael-Orpen',
    password: bcrypt.hashSync('#RichardOrpen2024', 10),
  },
  {
    id: 2,
    firstName: 'Richard',
    nickName: 'RiOrpen2024',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    id: 3,
    firstName: 'Guilherme',
    nickName: 'Guilherme-Orpen',
    password: bcrypt.hashSync('#RichardOrpen2024', 10),
  },
  {
    id: 4,
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


const chats = [
  {
    id: 1,  
    authorId: 1,
    recipientId: 2,
    message: 'Oi Richard! Como você está?',
  },
  {
    id: 2,  
    authorId: 1,
    recipientId: 2,
    message: 'Tenho uma ótima notícia! Estamos recrutando para uma posição na Orpen e pensei em você. Que tal uma entrevista para discutirmos mais sobre a oportunidade?',
  },
  {
    id: 3,  
    authorId: 2,
    recipientId: 1,
    message: 'Olá Rafael! Estou bem, obrigado. Isso soa incrível! Estou interessado. Quando podemos agendar a entrevista?',
  },
  {
    id: 4,  
    authorId: 2,
    recipientId: 1,
    message: 'Mal posso esperar para discutir mais sobre a oportunidade na Orpen.',
  },
  {
    id: 5,  
    authorId: 1,
    recipientId: 2,
    message: 'Perfeito, Richard! Podemos marcar a entrevista para amanhã às 13h. Está bom para você este horário?',
  },
  {
    id: 6,  
    authorId: 2,
    recipientId: 1,
    message: 'Ótimo, Rafael! O horário está perfeito.',
  },
  {
    id: 7,  
    authorId: 2,
    recipientId: 1,
    message: 'Obrigado pela oportunidade e até lá!',
  },
  {
    id: 8,
    authorId: 1,
    recipientId: 3,
    message: 'Estou indo bem. O que você anda fazendo?',
  },
  {
    id: 9,
    authorId: 3,
    recipientId: 1,
    message: 'Aproveitando o tempo livre para alguns projetos pessoais. E você?',
  },
  {
    id: 10,
    authorId: 1,
    recipientId: 3,
    message: 'Também focado em alguns projetos. Vamos marcar algo para nos encontrarmos!',
  },
  {
    id: 11,
    authorId: 1,
    recipientId: 4,
    message: 'Oi Maicon! Como você está?',
  },
  {
    id: 12,
    authorId: 4,
    recipientId: 1,
    message: 'Oi Rafael! Estou bem, e você?',
  },
  {
    id: 13,
    authorId: 1,
    recipientId: 4,
    message: 'Estou ótimo. O que tem feito recentemente?',
  },
  {
    id: 14,
    authorId: 4,
    recipientId: 1,
    message: 'Trabalhando bastante. E você, como tem passado seu tempo?',
  },
  {
    id: 15,
    authorId: 1,
    recipientId: 4,
    message: 'Também trabalhando bastante. Vamos marcar algo para nos encontrarmos em breve!',
  },
] 

async function seedChats() {
  // _RPM
  await Promise.all(
    chats.map(async (chat) => {
      const createdChat = await prisma.chat.upsert({
        where: {
          id: chat.id
        },
        create: {
          ...chat,
        },
        update: {},
      })

      console.log(`User with id ${createdChat.id} created successfully`)
    }),
  )
}

async function main() {
  // _RPM
  console.log('Start seeding...')
  await seedUsers()
  await seedChats()
  console.log('seed completed!!!')
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })