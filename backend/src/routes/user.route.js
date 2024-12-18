import { Router } from "express";
import { UserController } from "../controllers/user.controllers.js";
import { AuthMiddleware } from "../middleware/auth.middleware.js";

const userRoute = Router()

//public routes
userRoute.post('/', UserController.create)
userRoute.get('/', UserController.readAll)
userRoute.get('/rental', AuthMiddleware.auth, UserController.getRental)
userRoute.get('/rental/:id', UserController.getRental)
userRoute.get('/:id', UserController.read)

userRoute.use(AuthMiddleware.auth) //security routes
userRoute.put('/', UserController.updated)
userRoute.put('/password', UserController.updatedPassword)
userRoute.delete('/', UserController.destroy)

//adm routes

userRoute.use((req, res, next) => AuthMiddleware.permission(req, res, next, "admin"))
userRoute.put('/admin/password/:id', UserController.updatedPassword)
userRoute.put('/admin/:id', UserController.updated)
userRoute.delete('/admin/:id', UserController.destroy)

export { userRoute }