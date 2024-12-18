import { Router } from "express";
import { UserController } from "../controllers/user.controllers.js";
import { AuthMiddleware } from "../middleware/auth.middleware.js";
import { UserMongooseRepository } from "../repositories/implementations/user.mongoose.repository.js";

const userRoute = Router()
const userMongooseRepository = new UserMongooseRepository()
const userController = new UserController(UserMongooseRepository)
console.log(userController.userRepository.getAllUsers)
//public routes
userRoute.post('/', UserController.create)
userRoute.get('/', userController.readAll)
userRoute.get('/:id', UserController.read)
userRoute.get('/rental/:id', UserController.getRental)


userRoute.use(AuthMiddleware.auth) //security routes
userRoute.get('/rental', UserController.getRental)
userRoute.put('/', UserController.updated)
userRoute.put('/password', UserController.updatedPassword)
userRoute.delete('/', UserController.destroy)

//adm routes

userRoute.use((req, res, next) => AuthMiddleware.permission(req, res, next, "admin"))
userRoute.put('/admin/password/:id', UserController.updatedPassword)
userRoute.put('/admin/:id', UserController.updated)
userRoute.delete('/admin/:id', UserController.destroy)

export { userRoute }