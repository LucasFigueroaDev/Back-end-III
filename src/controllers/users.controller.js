import { userRepository } from "../repository/user.repository.js";
import { createResponse } from "../utils/createResponse.js";

class UsersController {
    constructor(repository) {
        this.repository = repository
    }
    getAllUsers = async (req, res, next) => {
        try {
            const users = await this.repository.getAllUsers();
            createResponse(res, 200, { status: "success", payload: users });
        } catch (error) {
            next(error);
        }
    }
    getUser = async (req, res, next) => {
        try {
            const { id } = req.user;
            const user = await this.repository.getUserById(id);
            createResponse(res, 200, { status: "success", payload: user });
        } catch (error) {
            next(error);
        }
    }
    updateUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const updateBody = req.body;
            const userUpdated = await this.repository.updateUser(id, updateBody);
            createResponse(res, 200, { status: "success", payload: userUpdated });
        } catch (error) {
            next(error);
        }
    }
    deleteUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const userDeleted = await this.repository.userDelete(id);
            createResponse(res, 200, { status: "success", payload: userDeleted });
        } catch (error) {
            next(error);
        }
    }
    
}

export const usersController = new UsersController(userRepository);







