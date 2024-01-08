import { UserModel } from "../Model";

export async function getUserById(id: number) {
    const a = await UserModel.getUserById(id)
    if(a){
      return {status: 200, message: 'requisição feita com sucesso'}
    }
    throw new Error('deu ruim')
}

export async function getAllUsers() {
  return await UserModel.getAllUsers()
}