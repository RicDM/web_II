import { Router } from "express";
import { RentalController } from "../controllers/rental.controllers.js";

const rentalRoute = Router();

rentalRoute.get('/', RentalController.readAll);       
rentalRoute.get('/:id', RentalController.read);      
rentalRoute.put('/', RentalController.update);          
rentalRoute.post('/', RentalController.create);       
rentalRoute.delete('/', RentalController.destroy);      

export { rentalRoute };
