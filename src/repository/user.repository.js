import customError from "../utils/customError.js";
import UserDTO from "../dto/User.dto.js";
import { userDao } from "../dao/users.dao.js"

class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAllUsers = async () => {
        try {
            const users = await this.dao.getAll();
            if (!users) throw new customError(404, 'Error al obtener los usuarios');
            return users;
        } catch (error) {
            throw new Error(error);
        }
    }

    getUserByEmail = async (email) => {
        try {
            const user = await this.dao.getByEmail({ email });
            if (!user) throw new customError(404, 'Error al obtener el usuario');
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    getUserById = async (id) => {
        try {
            const user = await this.dao.getUserById(id);
            if (!user) throw new customError(404, 'Error al obtener el usuario');
            return new UserDTO(user);
        } catch (error) {
            throw error;
        }
    }

    userUpdate = async (id, body) => {
        try {
            const user = await this.getUserById(id);
            const userUpdate = await this.dao.update(id, body);
            if (!userUpdate) throw new customError(404, 'Error al actualizar el usuario');
            return userUpdate;
        } catch (error) {
            throw new Error(error);
        }
    }

    userDelete = async (id) => {
        try {
            const userDelete = await this.dao.delete(id);
            if (!userDelete) throw new customError(404, 'Error al eliminar el usuario');
            return userDelete;
        } catch (error) {
            throw new Error(error);
        }
    }

    userRegister = async (user) => {
        try {
            const newUser = await this.dao.create(user);
            if (!newUser) throw new customError(400, 'Error al crear el usuario');
            return UserDTO.getUserTokenFrom(newUser);
        } catch (error) {
            throw new Error(error);
        }
    }

    userLogin = async (user) => {
        try {
            const { email, password } = user;
            const exists = await this.getUserByEmail({ email });
            if (!exists) throw new customError(400, 'El usuario no existe');
            const isValidPassword = await passwordValidation(password, exists.password);
            if (!isValidPassword) throw new customError(400, 'Contraseña incorrecta');
            return UserDTO.getUserTokenFrom(exists);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const userRepository = new UserRepository(userDao);