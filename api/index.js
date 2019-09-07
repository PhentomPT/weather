const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorHandler = require('./middlewares/error-handler');
const cors = require('./middlewares/cors');
const router = require('./router');

app.use([
    cors(),
    bodyParser.json(),
    router,
    errorHandler
]);

app.listen(8000, () => {
    console.info(`API is running 🚀!`)
});