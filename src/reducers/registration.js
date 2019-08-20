import * as types from '../constants/ActionTypes'

var myReducer = (state = {}, action) => {
    switch (action.type) {
        case types.userConstants.REGISTER_REQUEST:
          return { registering: true };
        case types.userConstants.REGISTER_SUCCESS:
          return {};
        case types.userConstants.REGISTER_FAILURE:
          return {};
        default:
          return state
      }
}
export default myReducer;