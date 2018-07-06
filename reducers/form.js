import * as t from '../types/form';

const initState = {
  name: '',
  anotherInput: '',
}

const formReducer = (state = initState, action) => {
  switch(action.type) {
    
    case t.SET_INPUT :
      return {
        ...state,
        [action.field]: action.payload.input,
      }
    
    default :
      return state
  }
}

export default formReducer;