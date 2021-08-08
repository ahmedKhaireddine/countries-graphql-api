import Client from '../../graphql/Connect';
import { GET_COUNTRY } from '../../graphql/Queries';
import {
  FETCH_COUNTRY_FAILURE,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS
} from './Type';

const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRY_REQUEST
  };
}

const fetchCountrySuccess = country => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: country
  };
}

const fetchCountryFailure = error => {
  return {
    type: FETCH_COUNTRY_FAILURE,
    payload: error
  };
}

export const fetchCountry = id => {
  return async dispatch => {
    dispatch(fetchCountriesRequest());
    try {
      const { data: { country }} = await Client.query({
        query: GET_COUNTRY,
        variables: { id }
      });

      dispatch(fetchCountrySuccess(country));
    } catch (error) {
      dispatch(fetchCountryFailure(error))
    }
  }
}