export const SET_NAME = 'SET_NAME';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_SEARCH = 'SET_SEARCH';

export const setName = payload => {
  return {
    type: SET_NAME,
    payload,
  };
};
export const setSearch = payload => {
  return {
    type: SET_SEARCH,
    payload,
  };
};
export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const updateTodo = payload => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
