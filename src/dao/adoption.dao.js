import BaseDao from "./Base.dao.js";
import { adoptionModel } from "../models/adoption.model.js";

class AdoptionDao extends BaseDao {
    constructor(model) {
        super(model);
    }
}
export const AdoptionDao = new AdoptionDao(adoptionModel);
