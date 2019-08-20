import * as types from '../constants/ActionTypes'

var myReducer = (state = {}, action)  => {
    switch (action.type) {
        case types.alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case types.alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case types.alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}
export default myReducer;