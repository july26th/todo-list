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
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                taskName: action.task.taskName,
                status: action.task.status
            };
            if(!task.id) {
              task.id = generateID();
              state.push(task);
            } else {
              var rs = state.map((key, index) => {
                if(key.id === action.task.id) {
                  state[index] = task;
                }
              })
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            var result = state.map((key, index) => {
              if(key.id === action.id) {
                state[index].status = !state[index].status;
                localStorage.setItem('tasks', JSON.stringify(state));    
              }
            });
            return [...state];
        case types.DELETE_TASK:
            var result = state.map((key, index) => {
              if(index === action.id) {
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));    
              }
            });
            return [...state];
        default: return state;
    }
};

export default myReducer;