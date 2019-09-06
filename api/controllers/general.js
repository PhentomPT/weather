module.exports = {
    welcome(req, res) {
        return res.status(200).json({
            code: 200,
            message: 'API is Sunny!',
            content: null
        })
    }
}