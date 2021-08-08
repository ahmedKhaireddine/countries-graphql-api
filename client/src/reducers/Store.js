import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import countriesReducer from './countries/Reducer';
import countryReducer from './country/Reducer';

const Reducers = combineReducers({
  countriesData: countriesReducer,
  countryData: countryReducer
});

const Store = createStore(
  Reducers,
  applyMiddleware(Thunk)
);

export default Store;
