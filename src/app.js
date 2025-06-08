import express from 'express';
import cookieParser from 'cookie-parser';
import apiRouter from './routes/index.js';
import path from 'path';
import { errorHandler } from './middlewares/errorHandler.js';
import { connectDB } from './config/connection.db.js';
import { __dirname } from './utils/uploader.js';
import './config/passportJWT/jwt.config.js';


import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(cookieParser());

app.use('/api', apiRouter);
app.use(errorHandler);
connectDB();

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
