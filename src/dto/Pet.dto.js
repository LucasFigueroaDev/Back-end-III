export default class PetDTO {
    constructor(pet) {
        this.name = pet.name;
        this.specie = pet.specie;
        this.birthDate = pet.birthDate;
        this.image = pet.image
    }
    static getPetInputFrom = (pet) => {
        return {
            name: pet.name,
            specie: pet.specie,
            image: pet.image || '',
            birthDate: pet.birthDate || '12-30-2000',
            adopted: false
        }
    }
}