export default class UserDTO {
    constructor(user) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.role = user.role;
        this.pets = user.pets
    }
    static getUserTokenFrom = (user) => {
        return {
            id: user._id,
            name: `${user.first_name} ${user.last_name}`,
            role: user.role,
            email: user.email,
            pets: user.pets
        }
    }
}