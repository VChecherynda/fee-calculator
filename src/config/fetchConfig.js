const axios = require('axios');

async function fetchConfig({ baseUrl }) {
    try {
        const response = await Promise.all([
            axios.get(`${baseUrl}/cash-in`),
            axios.get(`${baseUrl}/cash-out-natural`),
            axios.get(`${baseUrl}/cash-out-juridical`)
        ]);

        return response.map(item => item.data);
    }  catch(err) {
        throw new Error("Failed load configs", { cause: err.message });
    }
}

module.exports = fetchConfig;