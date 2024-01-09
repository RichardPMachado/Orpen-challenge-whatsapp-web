import express, { NextFunction, Request, Response } from "express"
import { userRouter } from "./Routes"
import ErrorHandler from "./Errors/ErrorHandler"

const accessControl: express.RequestHandler = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,DELETE,OPTIONS,PUT,PATCH'
  )
  res.header('Access-Control-Allow-Headers', '*')
  next()
}

const app = express()

// Configurando o middleware para analisar dados de formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(accessControl)

app.use('/user', userRouter)

app.use(ErrorHandler.handle)

export default app