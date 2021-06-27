import { Model } from 'objection';
import knex from '../knexInstance.js';

Model.knex(knex);

export default class Country extends Model {
    static get tableName() {
        return 'countries';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonAttributes() {
        return [
            'area',
            'borders',
            'callingCodes',
            'languages',
            'latlng',
            'population',
            'topLevelDomain',
            'translations'
        ];
    }
}