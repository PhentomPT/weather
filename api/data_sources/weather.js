const axios = require('axios');

const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '8b6ec57b0b8c83d9214a756f0d3cb952';

const validTypes = ['weather', 'forecast'];
const validUnits = ['metric', 'imperial'];

module.exports = {
    async current(city, country_code = null, units = 'metric') {
        return this.get(city, country_code, 'weather', units);
    },
    async forecast(city, country_code = null, units = 'metric') {
        return this.get(city, country_code, 'forecast', units);
    },
    async get(city, country_code = null, type = 'weather', units = 'metric') {
        if (!validTypes.includes(type)) {
            throw Error('Invalid weather *type* value');
        }

        if (!validUnits.includes(units)) {
            throw Error('Invalid weather *unit* value');
        }
        
        let findBy = city;

        if (country_code) {
            findBy += `,${country_code}`;
        }

        const response = await axios.get(`${API_URL}/${type}?q=${findBy}&units=${units}&APPID=${API_KEY}`);
        return response.data;
    }
}
