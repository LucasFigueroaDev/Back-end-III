import { userRepository } from '../repository/user.repository.js';
import { createResponse } from '../utils/createResponse.js';
import 'dotenv/config';

class SessionsController {
    constructor(repository) {
        this.repository = repository
    }

    register = async (req, res, next) => {
        try {
            const newUser = req.body;
            const user = await this.repository.userRegister(newUser);
            createResponse(res, 201, { status: "Registro exitoso", payload: user });
        } catch (error) {
            next(error);
        }
    }

    login = async (req, res, next) => {
        try {
            const userLogin = req.body;
            const token = await this.repository.userLogin(userLogin);
            res.cookie('token', token, { httpOnly: true} )
            createResponse(res, 200, { status: "Usuario logueado", token: token });
        } catch (error) {
            next(error);
        }
    }

    current = async (req, res, next) => {
        try {
            const {id} = req.user;
            const user = await this.repository.getUserById(id);
            createResponse(res, 200, user);
        } catch (error) {
            next(error);
        }
    }
}

export const sessionsController = new SessionsController(userRepository);