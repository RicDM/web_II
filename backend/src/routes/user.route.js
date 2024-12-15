import { Router } from "express";
import { UserController } from "../controllers/user.controllers.js";

const participantRoute = Router()

participantRoute.get('/', UserController.readAll)
participantRoute.get('/:id', UserController.read)

//security routes
participantRoute.get('/rental', UserController.getRental)
participantRoute.put('/', UserController.updated)
participantRoute.post('/', UserController.create)
participantRoute.delete('/', UserController.destroy)

export { participantRoute }