import { Router } from "express";
import { RentalController } from "../controllers/rental.controllers.js";
import { UploadProvider } from "../middleware/upload.middleware.js";
import { AuthMiddleware } from "../middleware/auth.middleware.js";

const rentalRoute = Router();

rentalRoute.get('/', RentalController.readAll);       
rentalRoute.use(AuthMiddleware.auth) //security routes
rentalRoute.get('/:id', RentalController.read);      
rentalRoute.put('/:id', RentalController.update);          
rentalRoute.post('/', UploadProvider.multipleImageUpload, RentalController.create);       
rentalRoute.delete('/:id', RentalController.destroy);      

export { rentalRoute };
