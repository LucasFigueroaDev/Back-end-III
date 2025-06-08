import { Router } from "express";
import { mockController } from "../controllers/mocks.controller.js";

const router = Router();

router.get('/mockingusers', mockController.generateMockUsers);
router.get('/mockingpets', mockController.generateMockPets);
router.post('/generateData', mockController.generateData);

export default router;