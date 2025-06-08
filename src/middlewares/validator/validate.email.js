import validator from 'validator';
import CustomError from '../../utils/customError.js';

export const validateEmail = (req, res, next) => {
    const { email } = req.body;
    if (!validator.isEmail(email)) return next(new CustomError(400, 'Email inválido'));
    next();
}