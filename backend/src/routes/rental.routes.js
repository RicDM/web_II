import { Router } from "express";
import { RentalController } from "../controllers/rental.controllers.js";

const rentalRoute = Router();

rentalRoute.get('/', RentalController.readAll);
rentalRoute.get('/:id', RentalController.read);

export { rentalRoute };
