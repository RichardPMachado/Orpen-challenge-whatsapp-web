import { NextFunction, Request, Response } from "express"
import StatusCode from "status-code-enum"
import CustomError from "../Errors/CustomError"

export default function passwordRequired(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  // _RPM
  const { password } = req.body
  if (password) {
    next()
  } else {
    const error = new CustomError(
      'O campo senha é obrigatório',
      StatusCode.ClientErrorBadRequest,
    )
    next(error)
  }
}