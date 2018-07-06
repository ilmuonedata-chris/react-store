import { ADD_TASK } from '../types/message';

const initState = [];

const todoReducer = (state = initState, action) => {
  switch(action.type) {
    
    case ADD_TASK :
      console.log('payload: ', action.payload.task);
      return [
        ...state, 
        { 
          id: action.payload.id,
          task: action.payload.task 
        }
      ]
    
    default :
      return state
  }
}

export default todoReducer;