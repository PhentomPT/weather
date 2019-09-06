const jwt = require('jwt-simple');

const SECRET = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');
const ISSUER = 'the.weather.org';

module.exports = {
    decode(token) {
        // TODO check that the tokens is not invalidated
        return jwt.decode(token, SECRET);
    },
    encode(types = ['user']) {
        const exp = Date.now() + 3600;

        return jwt.encode({
            types,
            exp,
            iss: ISSUER
        }, SECRET);
    }
}