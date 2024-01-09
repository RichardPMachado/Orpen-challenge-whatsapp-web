import { NextFunction, Request, Response } from "express"
import StatusCode from "status-code-enum"
import CustomError from "../Errors/CustomError"

export default function nickNameRequired(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  // _RPM
  const { nickName } = req.body
  if (nickName) {
    next()
  } else {

    const error = new CustomError(
      'Nome de usuário é obrigatório',
      StatusCode.ClientErrorBadRequest,
    )
    console.log(error)
    
    next(error)
  }
}
