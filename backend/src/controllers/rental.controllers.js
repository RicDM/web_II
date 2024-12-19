import { Rental } from "../models/index.js";

export class RentalController {
    static async readAll(req, res) {
        try {
            const rentals = await Rental.find();
            res.status(200).json(rentals);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar os imóveis", error });
        }
    }

    static async read(req, res) {
        try {
            const { id } = req.params;
            const rental = await Rental.findById(id);
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
            console.log(newRentalData.files)
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
            }
            const images = req.files.map(file => file.path)
            delete newRentalData.files
            const newRental = await Rental.create({ images, ...newRentalData } );
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
            const rental = await Rental.findByIdAndUpdate(id)
            if (!rental) {
                return res.status(404).json({ message: "Imóvel não encontrado" });
            }
            if (req.user._id !== rental.owner) {
                return res.status(403).json({ error: "Você não tem permissão para editar este imóvel" });
            }
            const updatedRental = await Rental.findByIdAndUpdate(id, updatedData, { new: true });
            res.status(200).json({ message: "Imóvel atualizado com sucesso", rental: updatedRental });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Erro ao atualizar o imóvel", error });
        }
    }

    static async destroy(req, res) {
        try {
            const { id } = req.params;
            const rental = await Rental.findByIdAndUpdate(id)
            if (!rental) {
                return res.status(404).json({ message: "Imóvel não encontrado" });
            }
            if (req.user._id !== rental.owner) {
                return res.status(403).json({ error: "Você não tem permissão para editar este imóvel" });
            }
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
