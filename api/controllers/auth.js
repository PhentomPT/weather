const jwt = require('../helpers/jwt');

module.exports = {
    login(req, res) {
        const token = jwt.encode(['user']);

        return res.status(200).json({
            code: 200,
            message: 'LOGIN',
            content: {
                token
            }
        })
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