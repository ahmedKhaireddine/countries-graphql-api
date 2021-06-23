export const up = async knex => {
    return await knex.schema.createTable('countries', table => {
        table.increments('id').primary();
        table.string('alpha2Code');
        table.string('alpha3Code');
        table.string('area');
        table.string('borders');
        table.string('callingCodes');
        table.string('capital');
        table.string('demonym');
        table.string('flag');
        table.json('languages');
        table.json('latlng');
        table.string('name');
        table.string('nativeName');
        table.string('numericCode');
        table.string('population');
        table.string('region');
        table.string('subregion');
        table.json('topLevelDomain');
        table.json('translations');
    })
};

export const down = async knex => await knex.schema.dropTable('countries');
