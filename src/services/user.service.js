import { userRepository } from "../repository/user.repository.js";
import { createHash, passwordValidation } from "../utils/createHash.js";
import UserDTO from "../dto/user.dto.js";
import customError from "../utils/customError.js";
import jwt from "jsonwebtoken";
import 'dotenv/config';

class UserService {
    constructor(repository) {
        this.repository = repository
    }

    generateToken = (user, time = '1h') => {
        const payload = {
            id: user._id,
            name: `${user.first_name} ${user.last_name}`,
            role: user.role
        }
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: time });
    }

    getAllUsers = async () => {
        try {
            const users = await this.repository.getAllUsers();
            if (!users) throw new customError(404, 'Error al obtener los usuarios');
            return users;
        } catch (error) {
            throw error;
        }
    }

    getUserByEmail = async (email) => {
        try {
            const user = await this.repository.getUserByEmail(email);
            return user;
        } catch (error) {
            throw error;
        }
    }

    getUserById = async (id) => {
        try {
            const user = await this.repository.getUserById(id);
            if (!user) throw new customError(404, 'Error al obtener el usuario');
            return new UserDTO(user);
        } catch (error) {
            throw error;
        }
    }

    userUpdate = async (id, body) => {
        try {
            const user = await this.getUserById(id);
            const userUpdate = await this.repository.userUpdate(id, body);
            if (!userUpdate) throw new customError(404, 'Error al actualizar el usuario');
            return userUpdate;
        } catch (error) {
            throw error;
        }
    }

    userDelete = async (id) => {
        try {
            const userDelete = await this.repository.userDelete(id);
            if (!userDelete) throw new customError(404, 'Error al eliminar el usuario');
            return userDelete;
        } catch (error) {
            throw error;
        }
    }

    userRegister = async (user) => {
        try {
            const { email, password } = user;
            const exists = await this.getUserByEmail(email);
            if (exists) throw new customError(400, 'El usuario ya existe');
            const newUser = await this.repository.createUser({
                ...user,
                password: await createHash(password)
            })
            if (!newUser) throw new customError(400, 'Error al crear el usuario');
            return UserDTO.getUserTokenFrom(newUser);
        } catch (error) {
            throw error;
        }
    }

    userLogin = async (user) => {
        try {
            const { email, password } = user;
            const exists = await this.getUserByEmail(email);
            if (!exists) throw new customError(400, 'El usuario no existe');
            const isValidPassword = await passwordValidation(password, exists.password);
            if (!isValidPassword) throw new customError(400, 'Contraseña incorrecta');
            return this.generateToken(exists);
        } catch (error) {
            throw error;
        }
    }
}

export const userService = new UserService(userRepository);