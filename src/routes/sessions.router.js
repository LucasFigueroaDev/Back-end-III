import { Router } from 'express';
import { sessionsController } from '../controllers/sessions.controller.js';
import { validateEmail } from '../middlewares/validator/validate.email.js';
import passport from 'passport';

const router = Router();

router.post('/register',validateEmail, sessionsController.register);
router.post('/login',validateEmail, sessionsController.login);
router.get('/current', passport.authenticate('jwt-cookies', { session: false }), sessionsController.current);


export default router;