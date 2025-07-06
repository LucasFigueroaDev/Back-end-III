import { Router } from 'express';
import { petsController } from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();

router.get('/', petsController.getAllPets);
router.get('/:id', petsController.getPetById);
router.get('/name/:name', petsController.getPetsByName);
router.post('/', uploader.single('image'), petsController.createPet);
router.put('/:id', petsController.updatePet);
router.delete('/:id', petsController.deletePet);

export default router;