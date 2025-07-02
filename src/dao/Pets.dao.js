import BaseDao from "./Base.dao.js";
import { PetModel } from "../models/pet.model.js";

class PetDao extends BaseDao {
    constructor(model) {
        super(model);
    }
    getByName = async (name) => {
        return await this.model.findOne({ name });
    }

    getBySpecie = async (specie) => {
        return await this.model.find({ specie });
    }
}
export const petDao = new PetDao(PetModel);