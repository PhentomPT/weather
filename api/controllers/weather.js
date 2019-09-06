const weatherSource = require('../data_sources/weather');

module.exports = {
    async today(req, res, next) {
        try {
            const data = await weatherSource.current('Lisbon');

            return res.status(200).json({
                code: 200,
                message: 'weather for today',
                content: data
            });
        } catch (error) {
            return next(error);
        }
    },
    async forecast(req, res) {
        const data = await weatherSource.forecast('Lisbon');

        return res.status(200).json({
            code: 200,
            message: 'weather forecast of 5 days',
            content: data
        })
    }
}