import { ChatModel } from "../Model";

export async function getAllChats() {
  // _RPM
  return await ChatModel.getAllChats()
}

export async function getChatByUserId(id: number) {
  const data = await ChatModel.getChatByUserId(id)
      return data
}