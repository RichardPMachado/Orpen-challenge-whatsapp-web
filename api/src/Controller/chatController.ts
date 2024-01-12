import { NextFunction, Request, Response } from "express"
import StatusCode from "status-code-enum"
import { ChatService } from "../Service"

export async function getAllChats(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  //_RPM
  try {
    const data = await ChatService.getAllChats()
    console.log(data)
    return  res.status(StatusCode.SuccessOK).send(data)
  } catch(error) {
    next(error)
  }
}

export async function getChatById(
    req: Request,
    res: Response,
    next: NextFunction,
) {
  const { id } = req.params
  console.log(id, '_RPM')
  try {
    const data = await ChatService.getChatByUserId(+id)
    return  res.status(StatusCode.SuccessOK).send(data)
  } catch(error) {
    next(error)
  }
}