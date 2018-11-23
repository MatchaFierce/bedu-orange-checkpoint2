import axios from 'axios';

import {
  GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR,
  GET_USER, GET_USER_SUCCESS, GET_USER_ERROR,
  POST_USER, POST_USER_SUCCESS, POST_USER_ERROR,
  UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
  DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_ERROR
} from './../types/usersTypes';


const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });

  try {
    const res = await axios.get(' https://checkpoint2-grupo3.herokuapp.com/api/usuarios/orange');
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: err.message
    });
  }
};


const getUser = (key) => async (dispatch) => {
  dispatch({ type: GET_USER });

  try {
    const res = await axios.get(`https://checkpoint2-grupo3.herokuapp.com/api/usuarios/orange/${key}`);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: GET_USER_ERROR,
      payload: err.message
    });
  }
};


const postUser = (user) => async (dispatch) => {
  dispatch({ type: POST_USER });

  try {
    const res = await axios.post('https://checkpoint2-grupo3.herokuapp.com/api/usuarios/orange/',user);
    dispatch({
      type: POST_USER_SUCCESS,
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: POST_USER_ERROR,
      payload: err.message
    });
  }
};

const updateUser = (key) => async (dispatch) => {
  dispatch({ type: UPDATE_USER });

  try {
    const res = await axios.update(`https://checkpoint2-grupo3.herokuapp.com/api/usuarios/orange/${key}`);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: UPDATE_USER_ERROR,
      payload: err.message
    });
  }
};

const deleteUser = (key) => async (dispatch) => {
  dispatch({ type: DELETE_USER });

  try {
    const res = await axios.delete(`https://checkpoint2-grupo3.herokuapp.com/api/usuarios/orange/${key}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data
    });
    console.log(res.data);
  }

  catch (err) {
    dispatch({
      type: DELETE_USER_ERROR,
      payload: err.message
    });
  }
};

export {
  getUsers, getUser, postUser, updateUser, deleteUser
}
