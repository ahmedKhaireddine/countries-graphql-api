import { Model } from 'objection';
import knex from '../knexInstance';

Model.knex(knex);

export default class Country extends Model {
    static get tableName() {
        return 'country';
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