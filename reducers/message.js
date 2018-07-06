import { SET_MESSAGE } from '../types/message';

const initState = {
  message: ''
}

const messageReducer = (state = initState, action) => {
  switch(action.type) {
    
    case SET_MESSAGE :
      return {...state, message: action.payload.message}
    
    default :
      return state
  }
}

export default messageReducer;