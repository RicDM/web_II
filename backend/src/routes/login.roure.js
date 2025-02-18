import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const loginRoute = Router()

loginRoute.post('/', AuthController.login)


export { loginRoute }