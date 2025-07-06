import { userDao } from "../dao/users.dao.js";

class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAllUsers = async () => {
        return await this.dao.getAll();
    }

    getUserByEmail = async (email) => {
        return await this.dao.getByEmail(email);
    }

    getUserById = async (id) => {
        return await this.dao.getUserById(id);
    }

    userUpdate = async (id, body) => {
        return await this.dao.update(id, body);
    }

    userDelete = async (id) => {
        return await this.dao.delete(id);
    }

    userDeleteByEmail = async (email) => {
        return await this.dao.deleteByEmail(email);
    }

    createUser = async (user) => {
        return await this.dao.create(user);
    }

}

export const userRepository = new UserRepository(userDao);