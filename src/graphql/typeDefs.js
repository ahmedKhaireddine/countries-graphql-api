import { gql } from 'apollo-server';

export default gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    scalar Object

    # This "Country" type defines the queryable fields for every country in our data source.
    type Country {
        id: Int!
        alpha2Code: String
        alpha3Code: String
        area: String
        borders: [String]
        callingCodes: [String]
        capital: String
        demonym: String
        flag: String
        languages: [Object]
        latlng: [String]
        name: String
        nativeName: String
        numericCode: String
        population: String
        region: String
        subregion: String
        topLevelDomain: [String]
        translations: Object
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "countries" query returns an array of zero or more Countries (defined above).
    type Query {
        countries: [Country!]!
        country(id: ID!): Country!
    }
`;