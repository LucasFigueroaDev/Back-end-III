import BaseDao from "./Base.dao.js";
import { PetModel } from "../models/pet.model.js";

class PetDao extends BaseDao {
    constructor(model) {
        super(model);
    }
    getByName = async (name) => {
        try {
            return await this.model.findOne({ name });
        } catch (error) {
            throw new Error(error);
        }
    }

    getBySpecie = async (specie) => {
        try {
            return await this.model.find({ specie });
        } catch (error) {
            throw new Error(error);
        }
    }
}
export const petDao = new PetDao(PetModel);