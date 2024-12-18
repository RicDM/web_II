import { Router } from "express";
import { RentalController } from "../controllers/rental.controllers.js";
import { UploadProvider } from "../middleware/upload.middleware.js";

const rentalRoute = Router();

rentalRoute.get('/', RentalController.readAll);       
rentalRoute.get('/:id', RentalController.read);      
rentalRoute.put('/:id', RentalController.update);          
rentalRoute.post('/', UploadProvider.multipleImageUpload, RentalController.create);       
rentalRoute.delete('/:id', RentalController.destroy);      

export { rentalRoute };
