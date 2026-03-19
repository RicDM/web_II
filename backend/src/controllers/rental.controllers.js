import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ImageLocalProvider } from "../providers/image.provider.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../../db.json');

const getRentals = () => {
    const data = fs.readFileSync(dbPath, 'utf8');
    const parsedData = JSON.parse(data);
    // Maps `id` to `_id` to maintain compatibility with the frontend if it uses `_id`
    return parsedData.imoveis.map(rental => ({ ...rental, _id: rental.id }));
};

export class RentalController {
    static async readAll(req, res) {
        try {
            const rentals = getRentals();
            res.status(200).json(rentals.map(
                rental => {
                    // db.json stores them as imgSrc
                    const images = ImageLocalProvider.getFileUrl(rental.imgSrc || [], req);
                    rental.images = images;
                    return rental;
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
            const rentals = getRentals();
            const rental = rentals.find(r => r.id === id);
            
            if (!rental) {
                return res.status(404).json({ message: "Imóvel não encontrado" });
            }

            const images = ImageLocalProvider.getFileUrl(rental.imgSrc || [], req);
            rental.images = images;
            
            res.status(200).json(rental);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar o imóvel", error });
        }
    }
}
