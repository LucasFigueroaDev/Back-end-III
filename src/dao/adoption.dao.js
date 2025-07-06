import BaseDao from "./base.dao.js";
import { adoptionModel } from "../models/adoption.model.js";

class AdoptionDao extends BaseDao {
    constructor(model) {
        super(model);
    }

    getAdoptionAll = async () => {
        return await this.model.find().populate({ path: 'owner', select: 'first_name last_name -_id' }).populate({ path: 'pet', select: 'name -_id' });
    }

    deleteAdoption = async (id) => {
        return await this.model.findByIdAndDelete(id);
    }

}
export const adoptionDao = new AdoptionDao(adoptionModel);
