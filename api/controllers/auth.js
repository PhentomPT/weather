const jwt = require('../helpers/jwt');
const bcrypt = require('bcrypt');

const USER_HASH = '$2b$10$oqsckVaZMRPxPkcamOD6m.7vfSZpXvOKaxvuX2vNOsMlIfc5k0ri6';
const PASS_HASH = '$2b$10$ZQ0zNwVB/oAA5xae5T3QAe.YPHt5GX/1Nzd6SmiJQbuTMOyOfyIm2';

module.exports = {
    async login(req, res) {
        const matchUser = await bcrypt.compare(req.body.user, USER_HASH);
        const matchPassword = await bcrypt.compare(req.body.password, PASS_HASH);
        
        if (!matchUser || !matchPassword) {
            return res.status(200).json({
                code: 401,
                message: 'Invalid Credentials',
                content: null
            });
        }

        const token = jwt.encode(['user']);

        return res.status(200).json({
            code: 200,
            message: 'LOGIN',
            content: {
                token
            }
        });
    },
    logout(req, res) {
        // TODO Invalidate token
        return res.status(200).json({
            code: 200,
            message: 'LOGOUT',
            content: null
        })
    }
}