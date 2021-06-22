import { Model } from "objection";
import knex from "../knexInstance";

Model.knex(knex);

export default class Country extends Model {
    static get tableName() {
        return "country";
    }
}