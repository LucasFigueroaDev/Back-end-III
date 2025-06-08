import { userRepository } from "../repository/user.repository.js";
import { petRepository } from "../repository/pet.repository.js";
import { createResponse } from "../utils/createResponse.js";
import { generateMockUsers, generateMockPets } from "../utils/generateMock.js"

class MockController {
    constructor(repository) {
        this.repository = repository
    }

    generateMockUsers = async (req, res, next) => {
        try {
            const count = parseInt(req.query.count) || 50;

            if (count <= 0 || isNaN(count)) {
                return createResponse(res, 400, { error: 'El valor de "count" debe ser un número entero positivo.' });
            }
            const user = await generateMockUsers(count);

            createResponse(res, 201, { status: "Usuarios creados", payload: user });

        } catch (error) {
            next(error);
        }
    }

    generateMockPets = (req, res, next) => {
        try {
            const count = parseInt(req.query.count) || 50;

            if (count <= 0 || isNaN(count)) {
                return createResponse(res, 400, {
                    error: 'El valor de "count" debe ser un número entero positivo.',
                });
            }

            const pets = generateMockPets(count);
            createResponse(res, 200, { status: 'Mascotas mock generadas', payload: pets });
        } catch (error) {
            next(error);
        }
    }

    generateData = async (req, res, next) => {
        try {
            const usersCount = parseInt(req.query.users) || 0;
            const petsCount = parseInt(req.query.pets) || 0;
            const usersErrors = [];
            const petsErrors = [];

            if (
                (usersCount && (isNaN(usersCount) || usersCount < 0)) ||
                (petsCount && (isNaN(petsCount) || petsCount < 0))
            ) { return createResponse(res, 400, { error: 'Los parámetros "users" y "pets" deben ser números enteros positivos o cero.', }); }

            const generatedUsers = usersCount > 0 ? await generateMockUsers(usersCount) : [];
            const generatedPets = petsCount > 0 ? generateMockPets(petsCount) : [];
            console.log(generatedPets);
            console.log(generatedUsers);


            // Guardar usuarios en DB con userRegister (que encripta password y valida email)
            const savedUsers = [];
            for (const user of generatedUsers) {
                // Adaptamos user a la estructura esperada para userRegister
                try {
                    const userToken = await this.repository.userRegister(user);
                    savedUsers.push(userToken);
                } catch (error) {
                    usersErrors.push({ email: user.email, message: error.message });
                }
            }

            // Guardar mascotas en DB con createPet
            const savedPets = [];
            for (const pet of generatedPets) {
                try {
                    const newPet = await petRepository.createPet(pet);
                    savedPets.push(newPet);
                } catch (error) {
                    petsErrors.push({ name: pet.name, message: error.message });
                }
            }

            createResponse(res, 201, {
                status: 'Datos generados y guardados',
                users: savedUsers.length,
                pets: savedPets.length,
                errors: {
                    users: usersErrors,
                    pets: petsErrors
                },
                payload: { users: savedUsers, pets: savedPets }
            });
        } catch (error) {
            next(error);
        }
    }
}


export const mockController = new MockController(userRepository);