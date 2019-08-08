import { combineReducers } from 'redux';
import tasks from './tasks';
import display from './display';
import editTask from './editTask';
import filterTable from './filterTable';
import searchTask from './searchTask';

const myReducer = combineReducers({
    tasks: tasks,
    display: display,
    editTask: editTask,
    filterTable: filterTable,
    searchTask: searchTask
});

export default myReducer;