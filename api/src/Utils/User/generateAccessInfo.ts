
import { generateToken } from '../../Auth/Jwt'
import {
  ILoginResponse,
  IToken,
} from '../../Contracts/Interfaces/users'

function generateAccessInfo(user: ILoginResponse): ILoginResponse & IToken {
  // _RPM
  const {
    id,
    nickName,
    firstName,
  } = user
  const userInfo = {
    id,
    nickName,
    firstName,
  }
  const token = generateToken(userInfo)
  const loginResponse = { ...userInfo, ...token }
  return loginResponse
}

export default generateAccessInfo