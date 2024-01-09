import { Router } from "express"
import { UserController} from "../Controller"
import nickNameRequired from "../Middlewares/nickNameRequired"
import passwordRequired from "../Middlewares/passwordRequired"

const userRouter = Router()

userRouter.get('/', (req, res, next) => UserController.getAllUser(req, res, next))
userRouter.get('/:id', (req, res, next) => UserController.getUserById(req, res, next))

userRouter.post(
  '/login',
  nickNameRequired,
  passwordRequired,
  (req, res, next) => UserController.login(req, res, next),
)
export default userRouter