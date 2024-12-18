import { Schema, Types, model } from "mongoose";

export const UserSchema = new Schema({ 
    grupo: { type: String,  },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rentals: [{
        type: Types.ObjectId,
        ref: "Rental"
    }],
    id: { type: Types.ObjectId },     
}, { versionKey: false });

export const User = model('User', UserSchema);