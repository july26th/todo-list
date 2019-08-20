import * as types from './../constants/ActionTypes'
import { userService } from '../service';
import { history } from '../history.js';
export const listAll = () => {
    return {
        type: types.LIST_ALL
    };
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task: task
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
};

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task: task
    }
};

export const submitForm = () => {
    return {
        type: types.SUBMIT_FORM
    }
};

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
};

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id: id
    }
};

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id: id
    }
};

export const clearForm = () => {
    return {
        type: types.CLEAR_FORM
    }
};

export const filterTable = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter: filter
    }
};

export const searchTask = (keyword) => {
    return {
        type: types.SEARCH_TASK,
        keyword: keyword
    }
};

export const sortTask = (sort) => {
    return {
        type: types.SORT_TASK,
        sort: sort
    }
};


export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: types.alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: types.alertConstants.ERROR, message };
}

function clear() {
    return { type: types.alertConstants.CLEAR };
}


export const userActions = {
    login,
    logout,
    register
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/todolist');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: types.userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: types.userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: types.userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: types.userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: types.userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: types.userConstants.REGISTER_FAILURE, error } }
}
