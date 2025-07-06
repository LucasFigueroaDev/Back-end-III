import { petRepository } from "../repository/pet.repository.js";
import CustomError from "../utils/customError.js";

class PetsService {
    constructor(repository) {
        this.repository = repository;
    }

    getAllPets = async () => {
        try {
            const pets = await this.repository.getAllPets();
            if (!pets) throw new CustomError(404, "Error al obtener los pets");
            return pets;
        } catch (error) {
            throw error;
        }
    }

    getPetById = async (id) => {
        try {
            const pet = await this.repository.getPetById(id);
            if (!pet) throw new CustomError(404, "Error al obtener la mascota por id");
            return pet;
        } catch (error) {
            throw error;
        }
    }

    getPetsByName = async (name) => {
        try {
            const pet = await this.repository.getPetsByName(name);
            if (!pet) throw new CustomError(404, "Error al obtener la mascota por el nombre");
            return pet;
        } catch (error) {
            throw error;
        }
    }

    createPet = async (body) => {
        try {
            const newPet = await this.repository.createPet(body);
            if (!newPet) throw new CustomError(404, "Error al crear la mascota");
            return newPet;
        } catch (error) {
            throw error;
        }
    }

    updatePet = async (id, body) => {
        try {
            const idpet = await this.getPetById(id);
            const updatedPet = await this.repository.updatePet(idpet, body);
            if (!updatedPet) throw new CustomError(404, "Error al actualizar la mascota");
            return updatedPet;
        } catch (error) {
            throw error;
        }
    }

    deletePet = async (id) => {
        try {
            const deletedPet = await this.repository.deletePet(id);
            if (!deletedPet) throw new CustomError(404, "Error al eliminar la mascota");
            return deletedPet;
        } catch (error) {
            throw error;
        }
    }
};

export const petService = new PetsService(petRepository);