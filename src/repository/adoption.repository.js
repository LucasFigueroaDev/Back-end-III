import { adoptionDao } from "../dao/adoption.dao.js";

class AdoptionRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAllAdoptions = async () => {
        return await this.dao.getAdoptionAll();
    }

    getAdoptionById = async (id) => {
        return await this.dao.getById(id);
    }

    createAdoption = async (uid, pid) => {
        return await this.dao.create({ owner: uid, pet: pid });
    }

    deleteAdoption = async (id) => {
        return await this.dao.deleteAdoption(id);
    }
}

export const adoptionRepository = new AdoptionRepository(adoptionDao);