import * as t from '../types/message';

export const setMessage = (message) => {
  return dispatch => {
    dispatch({
      type: t.SET_MESSAGE,
      payload: {
        message
      }
    })
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