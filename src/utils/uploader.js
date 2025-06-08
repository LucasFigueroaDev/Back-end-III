import multer from "multer";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../../');

const uploadPath = path.join(rootDir, '../public');

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);  
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    }
});
const uploader = multer({ storage });

export default uploader;