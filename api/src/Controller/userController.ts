import { NextFunction, Request, Response } from "express"
import { UserService } from "../Service"
import { StatusCode } from 'status-code-enum'
export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params
  console.log(id, 'id')
  try {
    const data = await UserService.getUserById(+id)
    console.log(data)
    return  res.status(StatusCode.SuccessOK).send(data)
  } catch(error) {
    next(error)
  }
}

export async function getAllUser(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  
  try {
    const data = await UserService.getAllUsers()
    console.log(data)
    return  res.status(StatusCode.SuccessOK).send(data)
  } catch(error) {
    next(error)
  }
}