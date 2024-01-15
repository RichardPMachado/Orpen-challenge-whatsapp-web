import prisma from "../lib/prisma";

export async function getUserById(id: number) {
  // _RPM
  const data = await prisma.user.findUnique({
    where: { id }
  })
  console.log(data, "model")
  return data
}

export async function getAllUsers() {
  // _RPM
  const data = await prisma.user.findMany({
    where: {},
    select: {
      id: true,
      firstName:true,
      nickName: true,
      password: false,

    }
  })
  console.log(data, "model")
  return data
}

export async function getUserByNickName(nickName: string) {
  // _RPM
  return await prisma.user.findUnique({
    where: {nickName}
  })
}