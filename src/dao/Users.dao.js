import BaseDao from "./Base.dao.js";
import { userModel } from "../models/user.model.js";

class UserDao extends BaseDao {
    constructor(model) {
        super(model);
    }

    getByEmail = async (email) => {
        try {
            return await this.model.findOne({email});
        } catch (error) {
            throw new Error(error);
        }
    }

    getUserById = async (id) => {
        try {
            return await this.model.findById(id).populate('pets');
        } catch (error) {
            throw new Error(error);
        }
    }
}
export const userDao = new UserDao(userModel);