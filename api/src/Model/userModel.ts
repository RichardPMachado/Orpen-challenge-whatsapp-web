import prisma from "../lib/prisma";

export async function getUserById(id: number) {
  const data = await prisma.user.findUnique({
    where: { id }
  })
  console.log(data, "model")
  return data
}

export async function getAllUsers() {
  const data = await prisma.user.findMany()
  console.log(data, "model")
  return data
}