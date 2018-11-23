
const INITIAL_STATE = {
  dependents: [],
  dependent: {
    nombre_completo: '',
    dependencia: '',
    edad: '',
    _usuario: ''
  },
  loading: false,
  error: '',
  response: ''
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case "GET_USERS":
      return {
        ...state,
        error: '',
        loading: true
      };

    case "GET_DEPENDENTS_SUCCESS":
      return {
        ...state,
        error: '',
        loading: '',
        dependents: action.payload
      };

    case "GET_DEPENDENTS_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case "DELETE_DEPENDENT":
      return {
        ...state,
        error: '',
        loading: true
      };

    case "DELETE_DEPENDENT_SUCCESS":
      return {
        ...state,
        error: '',
        loading: '',
        response: action.payload
      };

    case "DELETE_DEPENDENT_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case "CHANGE_INPUT":
      return {
        ...state,
        input: action.payload
      };

    default:
      return state;
  }
}
