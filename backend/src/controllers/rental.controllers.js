import { Rental } from "../models/index.js";
import { ImageLocalProvider } from "../providers/image.provider.js";

export class RentalController {
    static async readAll(req, res) {
        try {
            const rentals = await Rental.find();
            res.status(200).json(rentals.map(
                rental => {
                    const images = ImageLocalProvider.getFileUrl(rental.images, req)
                    rental.images = images
                    return rental
                }
            ));
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar os imóveis", error });
        }
    }

    static async read(req, res) {
        try {
            const { id } = req.params;
            const rental = await Rental.findById(id);
            const images = ImageLocalProvider.getFileUrl(rental.images, req)
            rental.images = images
            if (!rental) {
                return res.status(404).json({ message: "Imóvel não encontrado" });
            }
            res.status(200).json(rental);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar o imóvel", error });
        }
    }

    static async create(req, res) {
        try {
            const newRentalData = req.body;

            console.log(newRentalData, req.user)
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
            }
            const images = req.files.map(file => file.filename)
            delete newRentalData.files
            const newRental = await Rental.create({ images, ...newRentalData, owner: req.user._id } );
            res.status(201).json({ message: "Imóvel criado com sucesso", rental: newRental });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Erro ao criar o imóvel", error });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const updatedRental = await Rental.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedRental) {
                return res.status(404).json({ message: "Imóvel não encontrado" });
            }
            res.status(200).json({ message: "Imóvel atualizado com sucesso", rental: updatedRental });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Erro ao atualizar o imóvel", error });
        }
    }

    static async destroy(req, res) {
        try {
            const { id } = req.params;
            const deletedRental = await Rental.findByIdAndDelete(id);
            if (!deletedRental) {
                return res.status(404).json({ message: "Imóvel não encontrado" });
            }
            res.status(200).json({ message: "Imóvel deletado com sucesso" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao deletar o imóvel", error });
        }
    }
}
