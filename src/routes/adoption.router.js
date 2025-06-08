import { Router} from 'express';
import { adoptionsController } from '../controllers/adoptions.controller.js';
const router = Router();

router.get('/',adoptionsController.getAllAdoptions);
router.get('/:id',adoptionsController.getAdoptionById);
router.post('/:uid/:pid',adoptionsController.createAdoption);

export default router;