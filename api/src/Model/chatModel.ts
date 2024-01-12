import prisma from "../lib/prisma"

export async function getAllChats() {
  // _RPM
  const data = await prisma.chat.findMany()
  console.log(data, "model")
  return data
}

export async function getChatByUserId(id: number ) {
  const data = await prisma.chat.findMany({
    where: {
      OR: [
        { recipientId: id },
        { authorId: id },
      ]     
    }
  })
  return data

}