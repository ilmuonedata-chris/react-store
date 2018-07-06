import { SET_LOCATION } from '../types/common';

const initState = {
  location: ''
}

const navigationReducer = (state = initState, action) => {
  switch(action.type) {
    
    case SET_LOCATION :
      return {
        ...state, 
        location: action.payload.location
      }
    
    default :
      return state
  }
}

export default navigationReducer;