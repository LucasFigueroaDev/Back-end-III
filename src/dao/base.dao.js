export default class BaseDao {
    constructor(model) {
        this.model = model;
    }

    getAll = async () => {
        try {
            return await this.model.find();
        } catch (error) {
            throw new Error(Error);
        }
    }
    getById = async (id) => {
        try {
            return await this.model.findById(id);
        } catch (error) {
            throw new Error(Error);
        }
    }
    create = async (body) => {
        try {
            return await this.model.create(body);
        } catch (error) {
            throw new Error(Error);
        }
    }
    update = async (id, body) => {
        try {
            return await this.model.findByIdAndUpdate(id, body, { new: true });
        } catch (error) {
            throw new Error(Error);
        }
    }
    delete = async (id) => {
        try {
            return await this.model.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(Error);
        }
    }
}