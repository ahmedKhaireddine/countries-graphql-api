import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

const Reducers = combineReducers({
});

const Store = createStore(
  Reducers,
  applyMiddleware(Thunk)
);

export default Store;
