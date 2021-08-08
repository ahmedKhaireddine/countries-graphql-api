import Client from '../../graphql/Connect';
import { GET_COUNTRIES } from '../../graphql/Queries';
import {
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS
} from './Type';

const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST
  }
}

const fetchCountriesSuccess = countries => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries
  }
}

const fetchCountriesFailure = error => {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error
  }
}

export const fetchCountries = (paginate = { offset: 0, limit: 12 }) => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    try {
      const { data: { countries }} = await Client.query({
        query: GET_COUNTRIES,
        variables: { paginate }
      });

      dispatch(fetchCountriesSuccess(countries));
    } catch (error) {
      dispatch(fetchCountriesFailure(error));
    }
  }
}