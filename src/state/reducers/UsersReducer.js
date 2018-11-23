import {
  GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR,
  GET_USER, GET_USER_SUCCESS, GET_USER_ERROR,
  POST_USER, POST_USER_SUCCESS, POST_USER_ERROR,
  UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
  DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_ERROR
} from './../types/usersTypes';


const INITIAL_STATE = {
  users: [],
  loading: false,
  error: '',
  response: ''
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_USERS:
      return {
        ...state,
        error: '',
        loading: true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        error: '',
        loading: '',
        users: action.payload
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case DELETE_USER:
      return {
        ...state,
        error: '',
        loading: true
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        error: '',
        loading: ''
      };

    case DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
