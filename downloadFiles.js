const axios = require('axios');
const fs = require('fs');

const request = async (url, options = {}) => {
    try {
        const { data } = await axios.get(url, options);

        return data;
    } catch (error) {
        console.log(error);
    }
}

const downloadFiles = async () => {
    try {
        const url = "https://restcountries.eu/rest/v2/all";
        const data = await request(url);

        data.forEach(async ({ flag, alpha3Code }) => {
            const data = await request(flag, {
                responseType: 'stream'
            });

            data.pipe(fs.createWriteStream(`./public/data/${alpha3Code.toLowerCase()}.svg`))
        });
    } catch (error) {
        console.log(error);
    }
}


(() => downloadFiles())();