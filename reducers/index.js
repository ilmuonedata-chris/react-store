import { combineReducers } from 'redux';
import messageReducer from './message';
import todoReducer from './todo';
import navigationReducer from './navigation';
import formReducer from './form';

const rootReducer = combineReducers({
  messageReducer,
  todoReducer,
  formReducer,
  navigationReducer,
});

export default rootReducer;