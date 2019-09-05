const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.info('Calling API /');

    res.status(200).json({
        code: 200,
        message: 'API WORKING!',
        content: null
    })
});

app.listen(8000, () => {
    console.info(`API is running 🚀!`)
});