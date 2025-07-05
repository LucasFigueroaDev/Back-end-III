import { userService } from '../services/user.service.js';
import { createResponse } from '../utils/createResponse.js';
import 'dotenv/config';

class SessionsController {
    constructor(service) {
        this.service = service
    }

    register = async (req, res, next) => {
        try {
            const newUser = req.body;
            const user = await this.service.userRegister(newUser);
            createResponse(res, 201, { status: "Usuario registrado con exito", payload: user });
        } catch (error) {
            next(error);
        }
    }

    login = async (req, res, next) => {
        try {
            const userLogin = req.body;
            const token = await this.service.userLogin(userLogin);
            res.cookie('token', token, { httpOnly: true} )
            createResponse(res, 200, { status: "Usuario logueado con exito", token: token });
        } catch (error) {
            next(error);
        }
    }

    current = async (req, res, next) => {
        try {
            const {id} = req.user;
            const user = await this.service.getUserById(id);
            createResponse(res, 200, user);
        } catch (error) {
            next(error);
        }
    }
}

export const sessionsController = new SessionsController(userService);