import { combineReducers } from 'redux';
import tasks from './tasks';
import display from './display';
import editTask from './editTask';
import filterTable from './filterTable';
import searchTask from './searchTask';
import sortTask from './sortTask';

const myReducer = combineReducers({
    tasks: tasks,
    display: display,
    editTask: editTask,
    filterTable: filterTable,
    searchTask: searchTask,
    sortTask: sortTask
});

export default myReducer;