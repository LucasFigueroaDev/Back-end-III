import { createResponse } from "../utils/createResponse.js";
import { adoptionRepository } from "../repository/adoption.repository.js";

class AdoptionsController {
    constructor(repository) {
        this.repository = repository
    }
    getAllAdoptions = async (req, res, next) => {
        try {
            const adoptions = await adoptionRepository.getAllAdoptions();
            createResponse(res, 200, { status: "Exito al obtener todas las adopciones", payload: adoptions });
        } catch (error) {
            next(error);
        }
    }
    getAdoptionById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const adoption = await adoptionRepository.getAdoptionById(id);
            createResponse(res, 200, { status: "Exito al obtener la adopcion", payload: adoption });
        } catch (error) {
            next(error);
        }
    }
    createAdoption = async (req, res, next) => {
        try {
            const { uid, pid } = req.params;
            const adoption = await adoptionRepository.createAdoption(uid, pid);
            createResponse(res, 201, { status: "Exito al crear la adopcion", payload: adoption });
        } catch (error) {
            next(error);
        }
    }
}

export const adoptionsController = new AdoptionsController(adoptionRepository);