import * as t from '../types/form';

export const setInput = (input, field) => {
  return dispatch => {
    dispatch(inputCreators(input, field));
  }
}

let nextTask = 0;
export const addTask = (task) => {
  return dispatch => {
    dispatch({
      type: t.ADD_TASK,
      payload: {
        id: nextTask++,
        task
      }
    })
  }
}

const inputCreators = (input, field) => {
  return {
    type: t.SET_INPUT,
    field: field,
    payload: {
      input
    }
  }
}