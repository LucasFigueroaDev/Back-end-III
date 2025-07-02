import { faker } from "@faker-js/faker";
import { createHash } from "./createHash.js";

export const generateMockUsers = async (count = 1) => {
    const users = Array.from({ length: count }, async () => {
        return {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: await createHash('coder123'),
            role: Math.random() < 0.5 ? 'user' : 'admin',
            pets: []
        };
    });
    return await Promise.all(users);
};

export const generateMockPets = (count = 1) => {
    const speciesList = ['gato', 'perro'];
    const pets = [];
    for (let i = 0; i < count; i++) {
        const specie = faker.helpers.arrayElement(speciesList);
        const name = specie === 'gato' ? faker.animal.cat() : faker.animal.dog();
        pets.push({
            name,
            specie,
            birthDate: faker.date.birthdate({ min: 0, max: 15, mode: 'age' }),
            adopted: false,
            image: ''
        });
    }
    return pets;
};
