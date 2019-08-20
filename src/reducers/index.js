import { combineReducers } from 'redux';
import tasks from './tasks';
import display from './display';
import editTask from './editTask';
import searchTask from './searchTask';
import sortTask from './sortTask';
import alert from './alert';
import authentication from './authentication';
import registration from './registration';

const myReducer = combineReducers({
    tasks,
    display,
    editTask,
    searchTask,
    sortTask,
    alert,
    authentication,
    registration

});

export default myReducer;