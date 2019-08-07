import * as types from './../constants/ActionTypes'

var randomID = () => {
    return Math.floor((Math.random()*0x10000)+1).toString(16);
  }
var generateID = () => {
    return randomID() + randomID() + randomID() + '-' 
    + randomID() + randomID() + randomID();
  }

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: generateID(),
                taskName: action.task.taskName,
                status: action.task.status
            }
            console.log(newTask);
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
};

export default myReducer;