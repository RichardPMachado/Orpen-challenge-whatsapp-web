import 'dotenv'
import * as jwt from 'jsonwebtoken'
import IToken from '../Contracts/Interfaces/users/IToken'
import ILoginResponse from '../Contracts/Interfaces/users/ILoginResponse'

  const mySecret = process.env.JWT_SECRET as string
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  }

  function generateToken(payload: ILoginResponse): IToken {
    const token = jwt.sign(payload, mySecret, jwtConfig)
    const expirationInMinutes = 10.08 // 10.080 minutos é equivalente à 12 horas _RPM
    return { token, expiresIn: expirationInMinutes }
  }

  function decryptToken(token: string): ILoginResponse  {
    const decryptedData = jwt.verify(token, mySecret) as jwt.JwtPayload
    return decryptedData as ILoginResponse
  }


export {
  generateToken,
  decryptToken
}
