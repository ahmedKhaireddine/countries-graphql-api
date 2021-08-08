import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
    query ($paginate: CountryPaginateInput) {
        countries(paginate: $paginate) {
            flag
            id
            name
        }
    }
`;

export const GET_COUNTRY = gql`
    query ($id: ID!) {
        country(id: $id) {
            alpha2Code
            alpha3Code
            area
            callingCodes
            borders
            capital
            demonym
            flag
            id
            languages
            latlng
            nativeName
            name
            region
            population
            numericCode
            subregion
            topLevelDomain
            translations
        }
    }
`;