import BaseDao from "./base.dao.js";
import { userModel } from "../models/user.model.js";

class UserDao extends BaseDao {
    constructor(model) {
        super(model);
    }

    getByEmail = async (email) => {
        return await this.model.findOne({ email });
    }

    getUserById = async (id) => {
        return await this.model.findById(id).populate('pets');
    }

    deleteByEmail = async (email) => {
        return await this.model.findOneAndDelete({ email });
    }
}
export const userDao = new UserDao(userModel);