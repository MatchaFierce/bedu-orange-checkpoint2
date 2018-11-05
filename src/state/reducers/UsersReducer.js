import { GET_USERS_SUCCESS, GET_USERS_ERROR, LOADING_USERS } from './../actions/UsersActions';


/**
 * [initialState description]
 * @type {Object}
 */
const initialState = {
  users: [],
  loading: false,
  errorMessage: ""
}


/**
 * [DependantsReducer description]
 * @param {[type]} [state=initialState] [description]
 * @param {[type]} action               [description]
 */
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }


    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }

      case LOADING_USERS:
        return {
          ...state,
          loading: true
        }

    // case GET_DEPENDENT:
    //   break;
    //
    // case POST_DEPENDENT:
    //   return state.concat([action.data]);
    //
    // case UPDATE_DEPENDANT:
    //   return state.map((dependant) => {
    //     if (dependant.id === action.id) {
    //       return {
    //         ...dependant,
    //         name: action.data.newName,
    //         fatherName: action.data.newFatherName,
    //         motherName: action.data.newMotherName,
    //       }
    //     } else return dependant;
    //   })


    // case DELETE_DEPENDANT:
    //   return state.filter((dependant) => dependant.id !== action.id)


    default:
      return state;
  }
}


export default UsersReducer;
