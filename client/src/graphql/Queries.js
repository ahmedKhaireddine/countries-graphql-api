import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
    query ($paginate: CountryPaginateInput) {
        countries(paginate: $paginate) {
            id
            name
            flag
        }
    }
`;