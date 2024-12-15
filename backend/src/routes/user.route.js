import { Router } from "express";
import { UserController } from "../controllers/user.controllers.js";

const userRoute = Router()

userRoute.get('/', UserController.readAll)
userRoute.get('/:id', UserController.read)

//security routes
userRoute.get('/rental', UserController.getRental)
userRoute.put('/', UserController.updated)
userRoute.post('/', UserController.create)
userRoute.delete('/', UserController.destroy)

export { userRoute }