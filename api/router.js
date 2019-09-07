const router = require('express').Router();

const authMiddleware = require('./middlewares/auth');

const { welcome } = require('./controllers/general');
const auth = require('./controllers/auth');
const weather = require('./controllers/weather');

router.get('/', [], welcome);
router.post('/login', [], auth.login);
router.get('/logout/:email', [ authMiddleware ], auth.logout);

router.get('/weather/today/:cityName', [ authMiddleware ], weather.today);
router.get('/weather/forecast/:cityName/:cityCode?', [ authMiddleware ], weather.forecast);

module.exports = router;