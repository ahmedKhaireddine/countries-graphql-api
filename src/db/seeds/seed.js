import axios from 'axios';

export const seed = async knex => {
    const url = "https://restcountries.eu/rest/v2/all";

    const { data } = await axios.get(url);

    await knex('countries').del();

    const fieldsToInsert = await data.map(element => {
        const {
            alpha2Code, alpha3Code, area, borders,
            callingCodes, capital, demonym, flag, languages,
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
            flag,
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