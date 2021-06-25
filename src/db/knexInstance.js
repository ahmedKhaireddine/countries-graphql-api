import knex from "knex";
import { knexSnakeCaseMappers } from "objection";
import { client, connection } from '../../knexfile.js';

export default knex({
    client,
    connection,
    ...knexSnakeCaseMappers({
        underscoreBeforeDigits: true,
    }),
});
