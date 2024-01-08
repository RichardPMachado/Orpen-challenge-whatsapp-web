import { UserModel } from "../Model";

export async function getUserById(id: number) {
  // _RPM
  const data = await UserModel.getUserById(id)
    if(data){
      return data
    }
    throw new Error('deu ruim')
}

export async function getAllUsers() {
  // _RPM
  return await UserModel.getAllUsers()
}