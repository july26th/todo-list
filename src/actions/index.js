import * as types from './../constants/ActionTypes'

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