import { Schema, model } from "mongoose";

const adoptedCollection = "Adoptions";
const adoptedSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'Users' },
    pet: { type: Schema.Types.ObjectId, ref: 'Pets' }
})

export const adoptionModel = model (adoptedCollection,adoptedSchema);