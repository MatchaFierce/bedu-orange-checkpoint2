import axios from 'axios';
export const GET_DEPENDENTS = "GET_DEPENDENTS";
export const GET_DEPENDENTS_SUCCESS = "GET_DEPENDENTS_SUCCESS";
export const GET_DEPENDENTS_ERROR = "GET_DEPENDENTS_ERROR";
export const LOADING_DEPENDENTS = "LOADING_DEPENDENTS";


const GetDependents = () => {
  return async (dispatch) => {
    dispatch(LoadingDependents())
    try {
      const response = await axios.get(" http://checkpoint2-grupo3.herokuapp.com/api/dependientes/orange");
      console.log(response);
      dispatch(SuccessGettingDependents(response.data.data));
    } catch (e) {
      dispatch(ErrorGettingDependents());
    }
  }
};


/**
 * [SuccessGettingDEPENDANTS description]
 * @param {[type]} dependants [description]
 */
const SuccessGettingDependents = (dependents) => ({
  type: GET_DEPENDENTS_SUCCESS,
  dependents
});


/**
 * [ErrorGettingDEPENDANTS description]
 * @param {[type]} err [description]
 */
const ErrorGettingDependents = (err) => ({
  type: GET_DEPENDENTS_ERROR,
  err
})



const LoadingDependents = () => ({
  type: LOADING_DEPENDENTS
});


export {
  GetDependents as getDependents,
  SuccessGettingDependents as successGettingDependents,
  ErrorGettingDependents as errorGettingDependents,
  LoadingDependents as loadingDependents
};
