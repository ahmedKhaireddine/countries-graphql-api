import knex from "knex";
import { knexSnakeCaseMappers } from "objection";
import dotenv from 'dotenv';

dotenv.config();

const {
    DB_CONNECTION,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD
} = process.env;

export default knex({
    client: DB_CONNECTION,
    connection: {
        host:  DB_HOST,
        port:  DB_PORT,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
    },
    ...knexSnakeCaseMappers({
        underscoreBeforeDigits: true,
    }),
});
