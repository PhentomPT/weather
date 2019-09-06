const jwt = require('../helpers/jwt');

module.exports = (req, res, next) => {
    const token = req.headers['x-api-token'];
    
    // TODO catch errors and respond accordingly
    const decoded = jwt.decode(token);

    if (!decoded) {
        return res.status(401).json({
            code: 401,
            message: 'Unauthorized',
            content: null
        })
    }

    next();
}