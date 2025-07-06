import { petService } from "../services/pets.service.js";
import { createResponse } from "../utils/createResponse.js";
class PetsController {
    constructor(service) {
        this.service = service
    }

    getAllPets = async (req, res, next) => {
        try {
            const allPets = await this.service.getAllPets();
            createResponse(res, 200, { status: "Lista de mascotas", payload: allPets });
        } catch (error) {
            next(error);
        }
    }

    getPetById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const pet = await this.service.getPetById(id);
            createResponse(res, 200, { status: "Exito al obtener mascota", payload: pet });
        } catch (error) {
            next(error);
        }
    }

    getPetsByName = async (req, res, next) => {
        try {
            const { name } = req.params;
            const pet = await this.service.getPetsByName(name);
            createResponse(res, 200, { status: "Exito al obtener las mascotas", payload: pet });
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
            const pet = await this.service.createPet(newPet);
            createResponse(res, 201, { status: "Exito al cargar mascota", payload: pet });
        } catch (error) {
            next(error);
        }
    }

    updatePet = async (req, res, next) => {
        try {
            const { id } = req.params;
            const petUpdateBody = req.body;
            const pet = await this.service.updatePet(id, petUpdateBody);
            createResponse(res, 200, { status: "Exito al actualizar mascota", payload: pet });
        } catch (error) {
            next(error);
        }
    }

    deletePet = async (req, res, next) => {
        try {
            const { id } = req.params;
            const pet = await this.service.deletePet(id);
            createResponse(res, 200, { status: "Exito al eliminar mascota", payload: pet });
        } catch (error) {
            next(error);
        }
    }
}


export const petsController = new PetsController(petService);
