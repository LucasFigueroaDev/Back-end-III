import { createResponse } from "../utils/createResponse.js";
import { adoptionService } from "../services/adoption.service.js";

class AdoptionsController {
    constructor(service) {
        this.service = service
    }
    getAllAdoptions = async (req, res, next) => {
        try {
            const adoptions = await this.service.getAllAdoptions();
            createResponse(res, 200, { status: "Exito al obtener todas las adopciones", payload: adoptions });
        } catch (error) {
            next(error);
        }
    }
    getAdoptionById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const adoption = await this.service.getAdoptionById(id);
            createResponse(res, 200, { status: "Exito al obtener la adopcion", payload: adoption });
        } catch (error) {
            next(error);
        }
    }
    createAdoption = async (req, res, next) => {
        try {
            const { uid, pid } = req.params;
            const adoption = await this.service.createAdoption(uid, pid);
            createResponse(res, 201, { status: "Exito al crear la adopcion", payload: adoption });
        } catch (error) {
            next(error);
        }
    }
    deleteAdoption = async (req, res, next) => {
        try {
            const { id } = req.params;
            const adoption = await this.service.deleteAdoption(id);
            createResponse(res, 200, { status: "Exito al eliminar la adopcion", payload: adoption });
        } catch (error) {
            next(error);
        }
    }
}

export const adoptionsController = new AdoptionsController(adoptionService);