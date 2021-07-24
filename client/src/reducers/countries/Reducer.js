import {
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS
} from './Type';

const initState = {
  loading: true,
  countries : [],
  error : ""
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COUNTRIES_SUCCESS:
      return {
        countries : action.payload,
        error : "",
        loading: false
      }
    case FETCH_COUNTRIES_FAILURE:
      return {
        countries : [],
        error : action.payload,
        loading: false
      }
    default: return state;
  }
}

export default Reducer;