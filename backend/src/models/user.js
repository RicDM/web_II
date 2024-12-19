import { Schema, Types, model } from "mongoose";

export const UserSchema = new Schema({ 
    grupo: { type: String, enum: ['admin', 'usuario'], defaultValue: 'usuario' }, 
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: Types.ObjectId },     
}, { versionKey: false });

export const User = model('User', UserSchema);