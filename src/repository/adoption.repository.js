import CustomError from "../utils/customError.js";
import { adoptionDao } from "../dao/adoption.dao.js";
import { userDao } from "../dao/users.dao.js";
import { petDao } from "../dao/pets.dao.js";

class AdoptionRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAllAdoptions = async () => {
        try {
            const adoptions = await this.dao.getAll();
            if (!adoptions) throw new CustomError(404, "Error al obtener las adopciones");
            return adoptions;
        } catch (error) {
            throw error;
        }
    }

    getAdoptionById = async (id) => {
        try {
            const adoption = await this.dao.getById(id);
            if (!adoption) throw new CustomError(404, "Error al obtener la adopcion por id");
            return adoption;
        } catch (error) {
            throw error;
        }
    }

    createAdoption = async (uid, pid) => {
        try {
            const user = await userDao.getUserById(uid);
            if (!user) return CustomError(404, "Error al obtener el usuario");
            const pet = await petDao.getById(pid);
            if (!pet) return CustomError(404, "Error al obtener el pet");
            if (pet.adopted) return CustomError(400, "Error al adoptar el pet");
            user.pets.push(pet._id);
            const updatedUser = await userDao.update(user._id, { pets: user.pets });
            const updatedPet = await petDao.update(pet._id, { adopted: true, owner: user._id });
            const adoption = await this.dao.create({ owner: user._id, pet: pet._id });
            return adoption;
        } catch (error) {
            throw error;
        }
    }
}

export const adoptionRepository = new AdoptionRepository(adoptionDao);