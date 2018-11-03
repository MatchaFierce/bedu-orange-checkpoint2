import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


/* IMPORTING REDUCERS*/
import UsersReducer from './../reducers/UsersReducer';
import DependentsReducer from './../reducers/DependentsReducer';


const store = createStore(combineReducers({
  users: UsersReducer,
  dependants: DependentsReducer
}), applyMiddleware(thunk, logger));


export default store;
