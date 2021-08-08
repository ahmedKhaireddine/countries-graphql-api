const axios = require('axios');

exports.seed = async knex => {
    const url = "https://restcountries.eu/rest/v2/all";

    const { data } = await axios.get(url);

    await knex('countries').del();

    const fieldsToInsert = await data.map(element => {
        const {
            alpha2Code, alpha3Code, area, borders,
            callingCodes, capital, demonym, languages,
            latlng, name, nativeName, numericCode, population,
            region, subregion, topLevelDomain, translations
        } = element;

        return {
            alpha2Code,
            alpha3Code,
            area: JSON.stringify(area),
            borders: JSON.stringify(borders),
            callingCodes: JSON.stringify(callingCodes),
            capital,
            demonym,
            flag: `/data/${alpha3Code.toLowerCase()}.svg`,
            languages: JSON.stringify(languages),
            latlng: JSON.stringify(latlng),
            name,
            nativeName,
            numericCode,
            population: JSON.stringify(population),
            region,
            subregion,
            topLevelDomain: JSON.stringify(topLevelDomain),
            translations: JSON.stringify(translations)
        }
    });

    await knex('countries').insert(fieldsToInsert);
}