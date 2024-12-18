import { Router } from "express";
import { RentalController } from "../controllers/rental.controllers.js";

const rentalRoute = Router();

rentalRoute.get('/', RentalController.readAll);       
rentalRoute.get('/:id', RentalController.read);      
rentalRoute.put('/:id', RentalController.update);          
rentalRoute.post('/', RentalController.create);       
rentalRoute.delete('/:id', RentalController.destroy);      

export { rentalRoute };
