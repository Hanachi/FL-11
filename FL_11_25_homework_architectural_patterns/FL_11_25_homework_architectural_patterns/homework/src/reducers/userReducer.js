import { ADD_USERS, REMOVE_USER, FILTER_USERS } from "../actions/action";

const initialState  = {
  userData: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USERS:
      return {
        ...state,
        userData: action.payload
      };
    case REMOVE_USER:
      return {
        ...state,
        userData: state.userData.filter((user) => user.id !== action.payload)
      };
    case FILTER_USERS:
      return {
        ...state,
        userData: state.userData.filter((user) => user.name.toUpperCase())
      };
    default:
      return state;
  }
}
export default userReducer;