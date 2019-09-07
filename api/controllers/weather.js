const weatherSource = require('../data_sources/weather');

module.exports = {
    async today(req, res, next) {
        try {
            const data = await weatherSource.current(req.params.cityName);

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
        const data = await weatherSource.forecast(req.params.cityName, req.params.cityCode);

        return res.status(200).json({
            code: 200,
            message: 'weather forecast of 5 days',
            content: data
        })
    }
}