import {
  FETCH_COUNTRY_FAILURE,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_REQUEST
} from './Type';

const initState = {
  loading: false,
  country: {},
  error: ""
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_COUNTRY_SUCCESS:
      return {
        loading: false,
        country: action.payload,
        error: ""
      }
    case FETCH_COUNTRY_FAILURE:
      return {
        loading: false,
        country: {},
        error: action.payload
      }
    default: return state;
  }
}

export default Reducer;