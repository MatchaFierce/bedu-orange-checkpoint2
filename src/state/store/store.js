import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


/* IMPORTING REDUCERS*/
import usersReducer from './../reducers/usersReducer';
import dependentsReducer from './../reducers/dependentsReducer';


const store = createStore(combineReducers({
  usersReducer,
  dependentsReducer
}), {}, applyMiddleware(thunk, logger));


export default store;
