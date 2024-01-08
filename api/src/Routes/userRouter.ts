import { Router } from "express"
import { UserController} from "../Controller"

const userRouter = Router()

userRouter.get('/', (req, res, next) => UserController.getAllUser(req, res, next))
userRouter.get('/:id', (req, res, next) => UserController.getUserById(req, res, next))


export default userRouter