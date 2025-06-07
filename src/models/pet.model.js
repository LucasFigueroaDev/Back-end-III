import { Schema, model } from "mongoose";

const petsCollection = 'Pets';
const petsSchema = new Schema({
    name: { type: String, required: true, },
    specie: { type: String, required: true },
    birthDate: { type: Date },
    adopted: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: 'Users' },
    image: { type: String }
});
export const PetModel = model (petsCollection,petsSchema);