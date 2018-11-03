import axios from 'axios';
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const LOADING_USERS = "LOADING_USERS";


const GetUsers = () => {
  return async (dispatch) => {
    dispatch(LoadingUsers())
    try {
      const response = await axios.get(" http://checkpoint2-grupo3.herokuapp.com/api/usuarios/orange");
      dispatch(SuccessGettingUsers(response.data.data));
    } catch (e) {
      dispatch(ErrorGettingUsers());
    }
  }
};


/**
 * [SuccessGettingUsers description]
 * @param {[type]} users [description]
 */
const SuccessGettingUsers = (users) => ({
  type: GET_USERS_SUCCESS,
  users
});


/**
 * [ErrorGettingUsers description]
 * @param {[type]} err [description]
 */
const ErrorGettingUsers = (err) => ({
  type: GET_USERS_ERROR,
  err
})



const LoadingUsers = () => ({
  type: LOADING_USERS
});


export {
  GetUsers as getUsers,
  SuccessGettingUsers as successGettingUsers,
  ErrorGettingUsers as errorGettingUsers,
  LoadingUsers as loadingUsers
};
