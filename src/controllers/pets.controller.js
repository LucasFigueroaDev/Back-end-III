import { petRepository } from "../repository/pet.repository.js";
import { createResponse } from "../utils/createResponse.js";
class PetsController {
    constructor(repositoyry) {
        this.repository = repositoyry
    }

    getAllPets = async (req, res, next) => {
        try {
            const allPets = await this.repository.getAllPets();
            createResponse(res, 200, { status: "Exito al obtener todos los pets", payload: allPets });
        } catch (error) {
            next(error);
        }
    }

    createPet = async (req, res, next) => {
        try {
            const newPet = req.body;
            if (req.file) {
                newPet.image = `/img/${req.file.filename}`;
            }
            const pet = await this.repository.createPet(newPet);
            createResponse(res, 201, { status: "Exito al crear pet", payload: pet });
        } catch (error) {
            next(error);
        }
    }

    updatePet = async (req, res, next) => {
        try {
            const { id } = req.params;
            const petUpdateBody = req.body;
            const pet = await this.repository.updatePet(id, petUpdateBody);
            createResponse(res, 200, { status: "Exito al actualizar pet", payload: pet });
        } catch (error) {
            next(error);
        }
    }

    deletePet = async (req, res, next) => {
        try {
            const { id } = req.params;
            const pet = await this.repository.deletePet(id);
            createResponse(res, 200, { status: "Exito al eliminar pet", payload: pet });
        } catch (error) {
            next(error);
        }
    }
}


export const petsController = new PetsController(petRepository);
