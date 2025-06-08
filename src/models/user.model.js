import { Schema, model } from "mongoose";

const userCollection = 'Users';
const userSchema = new Schema({

    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pets', default: [] }]
});
export const userModel = model (userCollection,userSchema);