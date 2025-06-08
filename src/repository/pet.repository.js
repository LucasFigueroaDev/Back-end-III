import CustomError from "../utils/customError.js";
import PetDTO from "../dto/pet.dto.js";
import { petDao } from "../dao/pets.dao.js";

class PetsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAllPets = async () => {
        try {
            const pets = await this.dao.getAll();
            if (!pets) throw new CustomError(404, "Error al obtener los pets");
            return pets;
        } catch (error) {
            throw error;
        }
    };

    getPetById = async (id) => {
        try {
            const pet = await this.dao.getById(id);
            if (!pet) throw new CustomError(404, "Error al obtener el pet por id");
            return pet;
        } catch (error) {
            throw error;
        }
    };

    getNamedPet = async (name) => {
        try {
            const pet = await this.dao.getByName(name);
            if (!pet) throw new CustomError(404, "Error al obtener el pet");
            return pet;
        } catch (error) {
            throw error;
        }
    };

    createPet = async (body) => {
        try {
            const newPet = await this.dao.create(body);
            if (!newPet) throw new CustomError(404, "Error al crear el pet");
            return newPet;
        } catch (error) {
            throw error;
        }
    }

    updatePet = async (id, body) => {
        try {
            const idpet = await this.getPetById(id);
            const updatedPet = await this.dao.update(id, body);
            if (!updatedPet) throw new CustomError(404, "Error al actualizar el pet");
            return updatedPet;
        } catch (error) {
            throw error;
        }
    }

    deletePet = async (id) => {
        try {
            const deletedPet = await this.dao.delete(id);
            if (!deletedPet) throw new CustomError(404, "Error al eliminar el pet");
            return deletedPet;
        } catch (error) {
            throw error;
        }
    }
}

export const petRepository = new PetsRepository(petDao);