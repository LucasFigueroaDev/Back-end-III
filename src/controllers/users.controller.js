import { userService } from "../services/user.service.js";
import { createResponse } from "../utils/createResponse.js";

class UsersController {
    constructor(service) {
        this.service = service
    }
    getAllUsers = async (req, res, next) => {
        try {
            const users = await this.service.getAllUsers();
            createResponse(res, 200, { status: "Exito al obtener todos los usuarios", payload: users });
        } catch (error) {
            next(error);
        }
    }
    getUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await this.service.getUserById(id);
            createResponse(res, 200, { status: "Exito al obtener el usuario", payload: user });
        } catch (error) {
            next(error);
        }
    }
    updateUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const updateBody = req.body;
            const userUpdated = await this.service.userUpdate(id, updateBody);
            createResponse(res, 200, { status: "Exito al actualizar el usuario", payload: userUpdated });
        } catch (error) {
            next(error);
        }
    }
    deleteUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const userDeleted = await this.service.userDelete(id);
            createResponse(res, 200, { status: "Exito al eliminar el usuario", payload: userDeleted });
        } catch (error) {
            next(error);
        }
    }
    
}

export const usersController = new UsersController(userService);