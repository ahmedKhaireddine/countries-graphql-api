export const up = async knex => {
    return await knex.schema.createTable('countries', table => {
        table.increments("id").primary();
        table.string('alpha2Code').notNullable();
        table.string('alpha3Code').notNullable();
        table.string('area').notNullable();
        table.string('borders').notNullable();
        table.string('callingCodes').notNullable();
        table.string('capital').notNullable();
        table.string('demonym').notNullable();
        table.string('flag').notNullable();
        table.json('languages').notNullable();
        table.json('latlng').notNullable();
        table.string('name').notNullable();
        table.string('nativeName').notNullable();
        table.string('numericCode').notNullable();
        table.string('population').notNullable();
        table.string('region').notNullable();
        table.string('subregion').notNullable();
        table.json('topLevelDomain').notNullable();
        table.json('translations').notNullable();

    })
};

export const down = async knex => await knex.schema.dropTable('countries');
