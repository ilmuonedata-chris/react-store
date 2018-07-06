import * as t from '../types/common';

export const setLocation = (location) => {
  return dispatch => {
    dispatch({
      type: t.SET_LOCATION,
      payload: {
        location
      }
    })
  }
}