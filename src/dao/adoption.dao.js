import BaseDao from "./Base.dao.js";
import { adoptionModel } from "../models/adoption.model.js";

class AdoptionDao extends BaseDao {
    constructor(model) {
        super(model);
    }

    getAdoptionAll = async () => {
        return await this.model.find().populate({ path: 'owner', select: 'first_name last_name -_id' }).populate({ path: 'pet', select: 'name -_id' });
    }

}
export const adoptionDao = new AdoptionDao(adoptionModel);
