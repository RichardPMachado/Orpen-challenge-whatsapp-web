import { Router } from "express"
import { ChatController } from "../Controller"

const chatRouter = Router()

chatRouter.get('/', (req, res, next) => ChatController.getAllChats(req, res, next))
chatRouter.get('/user/:id', (req, res, next) => ChatController.getChatById(req, res, next))

export default chatRouter