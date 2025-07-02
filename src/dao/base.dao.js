export default class BaseDao {
    constructor(model) {
        this.model = model;
    }
    getAll = async () => {
        return await this.model.find();
    }
    getById = async (id) => {
        return await this.model.findById(id);
    }
    create = async (body) => {
        return await this.model.create(body);
    }
    update = async (id, body) => {
        return await this.model.findByIdAndUpdate(id, body, { new: true });
    }
    delete = async (id) => {
        return await this.model.findByIdAndDelete(id);
    }
}