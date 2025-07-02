import CustomError from "../utils/customError.js";
import { userRepository } from "../repository/user.repository.js";
import { petRepository } from "../repository/pet.repository.js";
import { adoptionRepository } from "../repository/adoption.repository.js";

class AdoptionService {
    constructor(repository) {
        this.repository = repository;
    }

    getAllAdoptions = async () => {
        try {
            const adoptions = await this.repository.getAllAdoptions();
            if (!adoptions) throw new CustomError(404, "Error al obtener todas las adopciones");
            return adoptions;
        } catch (error) {
            throw error;
        }
    }

    getAdoptionById = async (id) => {
        try {
            const adoption = await this.repository.getAdoptionById(id);
            if (!adoption) throw new CustomError(404, "Error al obtener la adopcion por id");
            return adoption;
        } catch (error) {
            throw error;
        }
    }

    createAdoption = async (uid, pid) => {
        try {
            const user = await userRepository.getUserById(uid);
            if (!user) return CustomError(404, "Error al obtener el usuario");
            const pet = await petRepository.getPetById(pid);
            if (!pet) return CustomError(404, "Error al obtener el pet");
            if (pet.adopted) return CustomError(400, "Error al adoptar el pet");
            user.pets.push(pet._id);
            const updatedUser = await userRepository.userUpdate(user._id, { pets: user.pets });
            const updatedPet = await petRepository.updatePet(pet._id, { adopted: true, owner: user._id });
            const adoption = await this.repository.createAdoption(user._id, pet._id);
            return adoption;
        } catch (error) {
            throw error;
        }
    }
}

export const adoptionService = new AdoptionService(adoptionRepository);