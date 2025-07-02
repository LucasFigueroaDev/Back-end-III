import { Router } from 'express';
import { canDeleteUser } from '../middlewares/canDeleteUser.js';
import { usersController } from '../controllers/users.controller.js';
import passport from 'passport';

const router = Router();

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', passport.authenticate('jwt-cookies', { session: false }), canDeleteUser, usersController.deleteUser);

export default router;