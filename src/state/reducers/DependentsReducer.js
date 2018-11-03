import { GET_DEPENDANTS_SUCCESS, GET_DEPENDANTS_ERROR, LOADING_DEPENDANTS } from './../actions/UserActions';


/**
 * [initialState description]
 * @type {Object}
 */
const initialState = {
  dependants: [],
  loading: false,
  errorMessage: ""
}


/**
 * [DependantsReducer description]
 * @param {[type]} [state=initialState] [description]
 * @param {[type]} action               [description]
 */
const DependantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPENDANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        dependants: action.dependants
      }


    case GET_DEPENDANTS_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }


    case GET_DEPENDENT:
      break;

    case POST_DEPENDENT:
      return state.concat([action.data]);

    case UPDATE_DEPENDANT:
      return state.map((dependant) => {
        if (dependant.id === action.id) {
          return {
            ...dependant,
            name: action.data.newName,
            fatherName: action.data.newFatherName,
            motherName: action.data.newMotherName,
          }
        } else return dependant;
      })


    case DELETE_DEPENDANT:
      return state.filter((dependant) => dependant.id !== action.id)


    default:
      return state;
  }
}


export default DependantsReducer;
