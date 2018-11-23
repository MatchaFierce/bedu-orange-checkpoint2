import axios from 'axios';


export const getDependents = () => async (dispatch) => {
  dispatch({ type: 'GET_DEPENDENTS' });

  try {
    const res = await axios.get(' https://checkpoint2-grupo3.herokuapp.com/api/dependientes/orange');
    dispatch({
      type: 'GET_DEPENDENTS_SUCCESS',
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: 'GET_DEPENDENTS_ERROR',
      payload: err.message
    });
  }
};


export const getDependent = (key) => async (dispatch) => {
  dispatch({ type: 'GET_DEPENDENT' });

  try {
    const res = await axios.get(`https://checkpoint2-grupo3.herokuapp.com/api/dependientes/orange/${key}`);
    dispatch({
      type: 'GET_DEPENDENT_SUCCESS',
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: 'GET_DEPENDENT_ERROR',
      payload: err.message
    });
  }
};


export const postDependent = (dependent) => async (dispatch) => {
  dispatch({ type: 'POST_DEPENDENT' });

  try {
    const res = await axios.post('https://checkpoint2-grupo3.herokuapp.com/api/dependientes/orange/', dependent);
    dispatch({
      type: 'POST_DEPENDENT_SUCCESS',
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: 'POST_DEPENDENT_ERROR',
      payload: err.message
    });
  }
};

export const updateDependent = (key) => async (dispatch) => {
  dispatch({ type: 'UPDATE_DEPENDENT' });

  try {
    const res = await axios.update(`https://checkpoint2-grupo3.herokuapp.com/api/dependientes/orange/${key}`);
    dispatch({
      type: 'UPDATE_DEPENDENT_SUCCESS',
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: "UPDATE_DEPENDENT_ERROR",
      payload: err.message
    });
  }
};

export const deleteDependent = (key) => async (dispatch) => {
  dispatch({ type: 'DELETE_DEPENDENT' });

  try {
    const res = await axios.delete(`https://checkpoint2-grupo3.herokuapp.com/api/dependientes/orange/${key}`);
    dispatch({
      type: 'DELETE_DEPENDENT_SUCCESS',
      payload: res.data
    });
  }

  catch (err) {
    dispatch({
      type: 'DELETE_DEPENDENT_ERROR',
      payload: err.message
    });
  }
};
