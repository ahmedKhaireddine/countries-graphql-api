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

export default  {
    client: DB_CONNECTION,
    connection: {
        database: DB_DATABASE,
        host: DB_HOST,
        password: DB_PASSWORD,
        port: DB_PORT,
        user: DB_USERNAME
    },
    migrations: {
        directory: "./src/db/migrations",
        tableName: "knex_migrations"
    },
    seeds: {
        directory: "./src/db/seeds"
    },
}