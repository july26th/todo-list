import * as types from '../constants/ActionTypes'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case types.userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case types.userConstants.LOGIN_FAILURE:
      return {};
    case types.userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
export default myReducer;