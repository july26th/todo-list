import * as types from './../constants/ActionTypes'


var initialState = false;

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.OPEN_FORM:
            state = true;
            return state;
        case types.SUBMIT_FORM:
            state = false;
            return state;
        case types.CLOSE_FORM:
            state = false;
            return state;
        default: return state;
    }
};

export default myReducer;