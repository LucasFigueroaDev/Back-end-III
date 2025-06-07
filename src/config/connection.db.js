import { connect } from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
    try {
        await connect(process.env.MONGO_KEY, { dbName: 'db-Project-CoderHouse-BackEnd-3' })
            .then(() => console.log('Conectado a la base de datos'));
    } catch (error) {
        throw new Error("Error al conectarse a la base de datos");
    }
};