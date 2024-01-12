import StatusCode from "status-code-enum"
import validateField from '../Utils/serviceValidation'
import ILoginResponse from "../Contracts/Interfaces/users/ILoginResponse"
import IToken from "../Contracts/Interfaces/users/IToken"
import { UserModel } from "../Model"
import { compareHash } from "../Utils/User/hashPassword"
import generateAccessInfo from "../Utils/User/generateAccessInfo"
import CustomError from "../Errors/CustomError"

export async function getUserById(id: number) {
  // _RPM
  const data = await UserModel.getUserById(id)
    if(data){
      return { ...data, password: undefined}
    }
    throw new Error('deu ruim')
}

export async function getAllUsers() {
  // _RPM
  return await UserModel.getAllUsers()
}

export async function login(loginUser: { nickName: string, password: string}): Promise<ILoginResponse & IToken> {
  // Validação: Caso não tenha o formato correto, retorna erro 400.
  // const validatedLogin = validateField<ILoginUser>(loginSchema, loginUser)

  // Verifica se o nickName existe
  const userFound = await UserModel.getUserByNickName(loginUser.nickName)

  if (!userFound) {
    throw new CustomError(
      `${loginUser.nickName} ou senha incorretos`,
      StatusCode.ClientErrorNotFound,
    )
  }

  // Verifica se a senha coincide
  const rightPassword = await compareHash(
    loginUser.password,
    userFound.password,
  )

  // Se a senha coincidir, gera token de acesso ao usuário; se não, retorna erro.
  if (rightPassword) {
    return generateAccessInfo(userFound)
  } else {
    throw new CustomError(
      'Nome de usuário ou senha incorretos',
      StatusCode.ClientErrorUnauthorized,
    )
  }
}