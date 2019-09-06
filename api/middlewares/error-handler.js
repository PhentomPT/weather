module.exports = (err, req, res, next) => {
    console.error(`Caught error: ${err.message}`);
    console.error(err.stack);

    return res.status(500).json({
        code: 500,
        message: 'Internal API problem',
        content: null
    })
}