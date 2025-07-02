import { petDao } from "../dao/pets.dao.js";

class PetsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAllPets = async () => {
        return await this.dao.getAll();
    }

    getPetById = async (id) => {
        return await this.dao.getById(id);
    }

    getNamedPet = async (name) => {
        return await this.dao.getByName(name);
    }

    createPet = async (body) => {
        return await this.dao.create(body);
    }

    updatePet = async (id, body) => {
        return await this.dao.update(id, body);
    }

    deletePet = async (id) => {
        return await this.dao.delete(id);
    }
}

export const petRepository = new PetsRepository(petDao);