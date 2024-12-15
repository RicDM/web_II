import { Schema, Types, model } from "mongoose";

export const ReantalSchema = new Schema({ 
    status: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    sector: { type: String, required: true },
    sqft: { type: String, required: true },
    bed: { type: Number, required: true },
    bath: { type: Number, required: true },
    contact: { type: String, required: true },
    owner: {
        type: Types.ObjectId,
        ref: "User"
    },
    id: { type: Types.ObjectId },  
}, { versionKey: false });

export const Reantal = model('Rental', ReantalSchema);

/* 
    {
      "id": "1",
      "imgSrc": ["img/amostras/1-1.jpg", "img/amostras/1-2.jpg", "img/amostras/1-3.jpg"],
      "status": "Recentes",
      "type": "Casa",
      "price": "1200",
      "title": "Casa na folha 31",
      "location": "Folha 31, Quadra 12, Lote 02, Nova Marabá",
      "sector": "Nova Marabá",
      "sqft": "120",
      "bed": "2",
      "bath": "2",
      "contact": "(94)987177380"
    },
*/